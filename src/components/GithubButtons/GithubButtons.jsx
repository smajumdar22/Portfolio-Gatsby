import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/smajumdar22"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork cobidev/gatsby-simplefolio on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/smajumdar22?tab=stars"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="https://github.com/smajumdar22?tab=stars"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
