import React from "react";
import { getAgentsRequest, GetAgentsResponseBody } from "../../api/agents/getAgents.api";

interface Props {
  getAgentsResponse: GetAgentsResponseBody;
}

const AgentsPage: React.FunctionComponent<Props> = ({ getAgentsResponse }) => {
  console.log('getAgentsResponse', getAgentsResponse);

  return (
      <div>
        {
          (getAgentsResponse.status === 200) && getAgentsResponse.data.map((data) => <div key={data.uuid}
                                                                                          style={{ marginTop: 36 }}>
            <h1>{data.displayName}</h1>
            <img src={data.displayIcon} alt={'agent_profile'}/>
            <h2>{data.description}</h2>
          </div>)
        }
      </div>
  );
};

export async function getStaticProps() {
  return getAgentsRequest();
}


export default AgentsPage;
