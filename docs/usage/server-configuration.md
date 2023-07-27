---
sidebar_position: 2
---

# 서버 런쳐 구성 설정

서버 런쳐 파일을 실행한다면, 폴더에 `server.conf.json`라는 구성 설정 파일이 생성됩니다.

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
  "plugins": ["https://github.com/MC-Dashify/plugin/releases/latest/download/dashify-plugin-all.jar"],
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
- **값 타입:** Integer

### server

:::note

`http(s)://`로 시작하는 서버 다운로드 링크를 넣거나 `file://path/to/server.jar` 형식의 서버 파일 위치를 넣습니다.

:::

서버 jar 파일의 경로 또는 링크를 설정합니다.

- **기본값:** `https://clip.aroxu.me/download?mc_version=1.19.4`
- **값 타입:** URI

### debug

JVM 디버깅 활성화 여부를 설정합니다.

- **기본값:** `false`
- **값 타입:** Boolean

### debug_port

:::note

`debug` 옵션이 꺼져있을 경우 이 옵션은 무시됩니다.

:::

서버 JVM 런타임이 종료되었을 경우 자동으로 재시작 할지 설정합니다

- **기본값:** `5005`
- **값 타입:** Integer

### restart

:::note

불가항적 비정상 종료(정전, 커널 패닉 또는 블루스크린)에 대해서는 해당되지 않습니다.

:::

서버 JVM 런타임이 종료되었을 경우 자동으로 재시작 할지 설정합니다

- **기본값:** `true`
- **값 타입:** Boolean

### memory

:::important

2GB가 넘지 않을경우 서버가 실행 되지 않을 수 있습니다.

:::

서버 JVM 런타임에 할당할 메모리 양을 GB단위로 설정합니다.

- **기본값:** `2`
- **값 타입:** Integer

### enable_traffic_monitor

:::important

test

:::

서버 트래픽 측정 기능을 활성화 할지 설정합니다.

- **기본값:** `false`
- **값 타입:** Boolean
