docker exec -it polaris-mysql-1 bash
mysql -u root -p
docker compose up
docker compose up --detach
curl polaris-service:8000/devices
mysql -h mysql -u root -p
mysql -h localhost --protocol tcp -u root -p #uses TCP instead of unix socket


```mermaid
    sequenceDiagram
    autonumber
    participant device
    participant Local router
    participant Rendezvous service
    participant Polaris service
    participant Owner service
    device->>+Local router: DHCP opt. 60
    Local router->>-device: HTTP Boot URL
    device->>+Polaris service: HTTP Boot request
    Polaris service->>-device: POS UKI boot image
    device->>+Rendezvous service: Request owner service URL
    Rendezvous service->>-device: Owner service URL
    device->>+Owner service: Provisioning secrets
    Owner service->>-device: Polaris waiting room authorization
    device->>+Polaris service: Request profile/join waiting room
    Polaris service->>-device: Profile URL
    device->>device: Device executes<br/>profile
```