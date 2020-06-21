import React from 'react';
import { Container } from 'react-bootstrap';

const Integrations = () => (
	<Container>
		<div className="how-it-works-wrapper">
			<h4>Slack</h4>
			<p className="section-indent-twenty">
				<a href="https://slack.com/oauth/v2/authorize?scope=incoming-webhook,commands,chat:write&client_id=20294060338.1195848918178">
					<img
					  alt="Add to Slack"
					  height={40}
					  width={139}
					  src="https://platform.slack-edge.com/img/add_to_slack.png"
					  srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
					/>
				</a>
			</p>
			<hr />
			<a href="https://github.com/cipherbin/cipher-bin-client/issues">
				To suggest or contribute other integrations please open an issue on cipherbin github.
			</a>
		</div>
	</Container>
);

export default Integrations;
