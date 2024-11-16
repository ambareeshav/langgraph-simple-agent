import { ToolNode } from "@langchain/langgraph/prebuilt";
import {
  END,
  MessagesAnnotation,
  START,
  StateGraph,
} from "@langchain/langgraph";
import { AIMessage, BaseMessage, SystemMessage, HumanMessage  } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import { LangchainToolSet } from "composio-core";

const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
  openAIApiKey: process.env.OPENAI_API_KEY, 
});

const toolset = new LangchainToolSet({ apiKey: process.env.COMPOSIO_API_KEY});
const tools = await toolset.getTools({ apps: ["tavily", "googlesheets"] });
const toolNode = new ToolNode(tools);

const agent1 = async (state: typeof MessagesAnnotation.State) => {
  const { messages } = state;

  const llmWithTools = llm.bindTools(tools);
  const result = await llmWithTools.invoke(messages);
  return { messages: [result] };
};

const shouldContinue = (state: typeof MessagesAnnotation.State) => {
  const { messages } = state;

  const lastMessage = messages[messages.length - 1];
  if (
    lastMessage._getType() !== "ai" ||
    !(lastMessage as AIMessage).tool_calls?.length
  ) {
    // LLM did not call any tools, or it's not an AI message, so we should end.
    return END;
  }
  return "tools";
};

const workflow = new StateGraph(MessagesAnnotation)
  .addNode("agent", agent1)
  .addEdge(START, "agent")
  .addNode("tools", toolNode)
  .addEdge("tools", "agent")
  .addConditionalEdges("agent", shouldContinue, ["tools", END]);

export const graph = workflow.compile();

