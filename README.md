# LangGraph Simple Agent

This repository demonstrates the implementation of a simple agent using the [LangGraph](https://github.com/langchain-ai/langgraph) framework. The agent is equipped with tools from Composio, Tavily, and Google Sheets to perform various tasks.

## Features

- **Composio Integration**: Incorporates tools from Composio to enhance agent capabilities.
- **Tavily Integration**: Utilizes Tavily for advanced search functionalities.
- **Google Sheets Integration**: Enables the agent to interact with Google Sheets for data retrieval and manipulation.

# Clone the repo
```
git clone https://github.com/ambareeshav/langgraph-simple-agent.git
cd langgraph-simple-agent
```
# Install required libraries
```
yarn install
```

# Create .env and set  API keys
```
LANGCHAIN_TRACING_V2=true
LANGCHAIN_ENDPOINT="https://api.smith.langchain.com"
LANGCHAIN_API_KEY=
LANGSMITH_API_KEY=
LANGCHAIN_PROJECT=
TAVILY_API_KEY=
OPENAI_API_KEY=
COMPOSIO_API_KEY=
```

Install langgraph-cli using python 
```
pip install langgraph-cli
```

Run the app locally using langgraph-cli and docker - reference [langgraph-cli](https://langchain-ai.github.io/langgraph/concepts/langgraph_cli) [deployement options](https://langchain-ai.github.io/langgraph/concepts/deployment_options/#build)
```
langgraph up
```
