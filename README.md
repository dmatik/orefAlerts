# orefAlerts
 
Node.js RESTful API to retrive Israeli [Pikud Ha-Oref](https://www.oref.org.il/) so called "Red Color" alerts. <br/>
The project deployed on Ducker Hub as [dmatik/oref-alerts](https://hub.docker.com/r/dmatik/oref-alerts).

## Usage
### Run from hub
#### docker run from hub
```text
docker run  --name orefAlerts dmatik/orefAlerts:latest
```

#### docker-compose from hub
```yaml
version: "3.6"
services:
    oref-alerts:
        image: dmatik/oref-alerts:latest
        container_name: oref-alerts
        network_mode: "bridge"
        ports:
          - 49000:3000
        environment:
            TZ: "Asia/Jerusalem"
        restart: unless-stopped
```

### Adding Sensor in Home-Assistant
#### Fetch the current alert.
```yaml
  - platform: rest
    resource: http://[YOUR_IP]:49000/current
    name: redalert
    value_template: 'OK'
    json_attributes:
      - alert
      - current
    scan_interval: 5
    timeout: 30
```

#### Fetch the last day history alerts.
```yaml
  - platform: rest
    resource: http://[YOUR_IP]:49000/last_day
    name: redalert_history
    value_template: 'OK'
    json_attributes:
      - "lastDay"
    scan_interval: 120
    timeout: 30
```
