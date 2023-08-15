# 서버 런처 구성 설정

서버 런처 파일을 실행한다면, 폴더에 `launcher.conf.json`라는 구성 설정 파일이 생성됩니다.

## 구성 파일 기본값

```json
{
  "config_version": 1,
  "server": "https://clip.aroxu.me/download?mc_version=1.20.1",
  "debug": false,
  "debug_port": 5005,
  "restart": true,
  "memory": 2,
  "enable_traffic_monitor": false,
  "traffic_redirect_port": 25555,
  "api_port": 8080,
  "plugin_api_port": 8081,
  "plugins": [
    "https://github.com/MC-Dashify/plugin/releases/latest/download/dashify-plugin-all.jar"
  ],
  "jar_args": ["nogui"]
}
```

## 파일 내 필드

### config_version

:::warning

구성 설정 버전을 임의로 변경할 경우 의도치 않은 오류가 일어날 수 있습니다.

:::

현재 구성 설정의 버전을 나타냅니다.

- **기본값:** `1`
- **값 타입:** `Integer`

### server

:::note

`http(s)://`로 시작하는 서버 다운로드 링크를 넣거나 `file://path/to/server.jar` 형식의 서버 파일 위치를 넣습니다.

:::

서버 jar 파일의 경로 또는 링크를 설정합니다.

- **기본값:** `https://clip.aroxu.me/download?mc_version=1.19.4`
- **값 타입:** `URI`

### debug

JVM 디버깅 활성화 여부를 설정합니다.

- **기본값:** `false`
- **값 타입:** `Boolean`

### debug_port

:::note

`debug` 옵션이 꺼져있을 경우 이 옵션은 무시됩니다.

:::

JVM 디버깅 포트를 설정합니다.

- **기본값:** `5005`
- **값 타입:** `Integer`

### restart

:::note

불가항력적 비정상 종료(정전, 커널 패닉 또는 블루스크린)는 해당되지 않습니다.

:::

서버 JVM 런타임이 종료되었을 경우 자동으로 재시작할지 설정합니다.

- **기본값:** `true`
- **값 타입:** `Boolean`

### memory

:::important

2GB가 넘지 않으면 서버가 실행되지 않을 수 있습니다.

:::

서버 JVM 런타임에 할당할 메모리 용량을 GB단위로 설정합니다.

- **기본값:** `2`
- **값 타입:** `Integer`

### enable_traffic_monitor

:::caution

해당 기능은 아직 alpha 기능입니다. README.MD 파일을 참고하여 알려진 이슈 목록을 확인하세요.

:::

서버 트래픽 측정 기능을 활성화할지 설정합니다.

- **기본값:** `false`
- **값 타입:** `Boolean`

### traffic_redirect_port

:::caution

해당 기능은 아직 alpha 기능입니다. README.MD 파일을 참고하여 알려진
이슈 목록을 확인하세요.

:::

:::note

`enable_traffic_monitor` 옵션이 꺼져있을 경우 이 옵션은 무시됩니다.

:::

서버 트래픽 측정 기능을 활성화할 경우, 서버 트래픽을 측정할 포트를 설정합니다.

- **기본값:** `25555`
- **값 타입:** `Integer`

### api_port

밖으로 노출되는 포트를 설정합니다.

- **기본값:** `8080`
- **값 타입:** `Integer`

### plugin_api_port

:::note

플러그인 설정 파일은 `plugins/Dashify/config.yml` 경로에 있습니다.

:::

서버에 들어가는 Dashify 플러그인 설정에 들어가 있는 포트와 동일하게 해주세요. Dashify는 해당 포트를 통해 정보를 불러옵니다. 포트가 일치하지 않을 경우 제대로 된 정보가 전달되지 않습니다.

- **기본값:** `8081`
- **값 타입:** `Integer`

### plugins

:::note

링크가 올바르지 않을 경우 해당 링크는 무시됩니다. 여기에 적힌 플러그인들은 launcher가 시작될 때마다 최신 버전으로 다운로드 됩니다.

:::

서버에 들어갈 플러그인의 다운로드 링크를 배열 형태로 적어주세요.

- **기본값:** `["https://github.com/MC-Dashify/plugin/releases/latest/download/dashify-plugin-all.jar"]`
- **값 타입:** `Array<String>`

### jar_args

:::note

유효하지 않은 argument는 무시됩니다. 일부 옵션을 잘못 입력하면 서버가 제대로 작동하지 않을 수 있습니다.

:::

서버 실행에 들어갈 arguments를 설정합니다.

- **기본값:** `["nogui"]`
- **값 타입:** `Array<String>`
