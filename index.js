const core = require('@actions/core');
const github = require('@actions/github');

try {
  const apiUrl = core.getInput('api-url');
  const title = core.getInput('title');
  const subtitle = core.getInput('subtitle');
  const contents = core.getMultilineInput('contents');
  const actionPage = core.getInput('action-page');

  const data = {
    cardsV2: [
      {
        cardId: 'createCardMessage',
        card: {
          header: {
            title,
            subtitle,
          },
          sections: [
            {
              widgets: [
                ...contents.map((content) => ({
                  textParagraph: {
                    text: content,
                  },
                })),
                {
                  buttonList: {
                    buttons: [
                      {
                        text: 'github action',
                        onClick: {
                          openLink: {
                            url: actionPage,
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

} catch (error) {
  core.setFailed(error.message);
}