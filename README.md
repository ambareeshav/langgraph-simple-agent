# A simple agent with tools using langgraph
- Useing Composio for tools
- Tavily
- Google Sheets

# Clone the repo
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

Run the app locally using langgraph-cli and docker - reference ![langgraph-cli](https://langchain-ai.github.io/langgraph/concepts/langgraph_cli) ![deployement options](https://langchain-ai.github.io/langgraph/concepts/deployment_options/#build)
```
langgraph up
```
