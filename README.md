# google-chat-notification

This action send a card message to a google chat room.

## Inputs

### `api-url`

**Required** The URL of the API.

### `title`

**Required** The title of the card. Default `"Build complete"`.

### `subtitle`

**Required** The subtitle of the card. Default `"The build is complete"`.

### `contents`

**Required** The contents of the Card (multiline).

### `action-page`

**Required** The action page button url.

## Example usage

```yaml
uses: GatewebSolutions/google-chat-notification@v1.0
with:
  api-url: https://chat.googleapis.com/v1/spaces/AAAAAA/messages?key=BBBBBB&token=CCCCC
  title: 前端web打包完成通知
  subtitle: feat: 修改了一些東西
  contents: |
    <b>前台</b>: client:asd8237114
    <b>後台</b>: admin:asd8237114
  action-page: https://github.com/GatewebSolutions/BPSPWeb/actions/runs/7752889810
```
