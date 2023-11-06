# 플러그인
Dashify 플러그인이 사용하는 API Endpoint들을 설명합니다.

## 개요
:::note

모든 HTTP 요청에는 `Authorization` 헤더에 `Bearer <Auth Key>` 와 같은 형식의 토큰 인증이 필요합니다.

:::


| 경로 | 프로토콜 | 요청 메소드 | 설명 |
|------------|-|-----|-----|
| `/worlds` | `HTTP` | `GET` | 모든 세계의 UID와 월드 이름의 리스트를 반환합니다. |
| `/worlds/<uid>` | `HTTP` | `GET` | 세계의 정보를 반환합니다. |
| `/players` | `HTTP` | `GET` | 모든 플레이어의 UUID와 플레이어 이름의 리스트를 반환합니다. |
| `/players/<uuid>` | `HTTP` | `GET` | 플레이어의 정보를 반환합니다. |
| `/stats` | `HTTP` | `GET` | 시스템의 정보를 반환합니다. |
| `/players/<uuid>/kick` | `HTTP` | `POST` | 플레이어를 추방합니다. |
| `/players/<uuid>/ban` | `HTTP` | `POST` | 플레이어를 차단합니다. |


## 사용되는 API Endpoint
### `/worlds`
* **사용 프로토콜:** `HTTP`
* **요청 메소드:** `GET`
* **필요한 파라미터:** 없음

모든 세계의 UID와 월드 이름의 리스트를 반환합니다.

### `/worlds/<uid>`

* **사용 프로토콜:** `HTTP`
* **요청 메소드:** `GET`
* **필요한 파라미터:** 없음

해당 UID의 세계의 정보를 반환합니다.

### `/players`

* **사용 프로토콜:** `HTTP`
* **요청 메소드:** `GET`
* **필요한 파라미터:** 없음

모든 플레이어의 UUID와 플레이어 이름의 리스트를 반환합니다.

### `/players/<uuid>`

* **사용 프로토콜:** `HTTP`
* **요청 메소드:** `GET`
* **필요한 파라미터:** 없음

해당 UUID의 플레이어의 정보를 반환합니다.

### `/stats`

* **사용 프로토콜:** `HTTP`
* **요청 메소드:** `GET`
* **필요한 파라미터:** 없음

시스템의 정보를 반환합니다.

### `/players/<uuid>/kick`

* **사용 프로토콜:** `HTTP`
* **요청 메소드:** `POST`
* **필요한 파라미터:** 없음

해당 UUID의 플레이어를 추방합니다.

Request Body을 JSON 형태로 전송하며 `reason` 필드에 추방 사유를 넣을 수 있습니다.

### `/players/<uuid>/ban`

* **사용 프로토콜:** `HTTP`
* **요청 메소드:** `POST`
* **필요한 파라미터:** 없음

해당 UUID의 플레이어를 차단합니다.

Request Body을 JSON 형태로 전송하며 `reason` 필드에 차단 사유를 넣을 수 있습니다.

