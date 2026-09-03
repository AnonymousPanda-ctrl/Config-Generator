// ============================================
//  CONFIG TEMPLATES - All templates in one place
// ============================================

// Define which brands are available for each device type
const BRAND_MAPPING = {
    'radio': ['ubiquiti', 'cambium'],
    'router': ['reyee', 'cudy', 'mikrotik']
};

// Brand display names
const BRAND_DISPLAY_NAMES = {
    // Radio brands
    'ubiquiti': 'Ubiquiti',
    'cambium': 'Cambium',
    
    // Router brands
    'reyee': 'Reyee [Coming Soon]',
    'cudy': 'Cudy [Coming Soon]',
    'mikrotik': 'MikroTik [Coming Soon]'
};

const CONFIG_TEMPLATES = {
    // ============================================
    // UBIQUITI RADIO TEMPLATE
    // ============================================
    'ubiquiti-radio': `aaa.status=disabled
system.cfg.editor.webui=2026-09-03T08:11:45.607Z
upnpd.status=disabled
igmpproxy.upstream.devname=br0
igmpproxy.status=disabled
tshaper.status=disabled
ip6tables.sys.fw6.status=disabled
ip6tables.sys.status=enabled
ip6tables.status=enabled
dhcpd.1.dns.2.server=1.1.1.1
dhcpd.1.dns.1.server=8.8.8.8
dhcpd.1.lease_time=600
dhcpd.1.netmask=255.255.255.0
dhcpd.1.end=192.168.90.254
dhcpd.1.start=192.168.90.2
dhcpd.1.dnsproxy=disabled
dhcpd.1.devname=br1
dhcpd.1.status=enabled
dhcpd.status=enabled
ppp.1.require.mppe128=disabled
ppp.1.mru=1492
ppp.1.mtu=1492
ppp.1.fallback_netmask=255.255.255.0
ppp.1.fallback=192.168.10.1
ppp.1.password=USER_PASSWORD
ppp.1.name=USER_USERNAME
ppp.1.devname=br0
ppp.1.ipv6.status=enabled
ppp.1.status=enabled
ppp.status=enabled
dhcp6d.1.stateful.status=enabled
dhcp6d.1.dns.1.server=2620:fe::fe
dhcp6d.1.dns.1.status=enabled
dhcp6d.1.dnsproxy=disabled
dhcp6d.1.devname=br1
dhcp6d.1.status=enabled
dhcp6d.status=enabled
dhcp6c.1.stateless.status=disabled
dhcp6c.1.stateful.pd.1.prefix.len=60
dhcp6c.1.stateful.pd.1.devname=br1
dhcp6c.1.stateful.pd.1.status=enabled
dhcp6c.1.stateful.status=enabled
dhcp6c.1.devname=ppp+
dhcp6c.1.status=enabled
dhcp6c.status=enabled
iptables.sys.portfw.status=disabled
iptables.sys.fw.status=disabled
iptables.sys.tcpmss.status=enabled
iptables.sys.masq.1.devname=ppp+
iptables.sys.masq.1.status=enabled
iptables.sys.masq.status=enabled
iptables.sys.status=enabled
iptables.status=enabled
bridge.2.port.1.devname=eth0
bridge.2.port.1.status=enabled
bridge.2.devname=br1
bridge.2.stp.status=disabled
bridge.2.status=enabled
bridge.1.port.1.devname=ath0
bridge.1.port.1.status=enabled
bridge.1.devname=br0
bridge.1.stp.status=disabled
bridge.1.status=enabled
bridge.status=enabled
netconf.4.netmask=255.255.255.0
netconf.4.ip=192.168.90.1
netconf.4.ip6.status=enabled
netconf.4.role=lan
netconf.4.mtu=1500
netconf.4.autoip.status=disabled
netconf.4.devname=br1
netconf.4.status=enabled
netconf.3.ip6.status=enabled
netconf.3.role=wan
netconf.3.mtu=1500
netconf.3.autoip.status=disabled
netconf.3.devname=br0
netconf.3.status=enabled
netconf.2.flowcontrol.tx.status=enabled
netconf.2.flowcontrol.rx.status=enabled
netconf.2.autoneg=enabled
netconf.2.mtu=1500
netconf.2.autoip.status=disabled
netconf.2.up=enabled
netconf.2.devname=eth0
netconf.2.status=enabled
netconf.1.mtu=1500
netconf.1.autoip.status=disabled
netconf.1.up=enabled
netconf.1.devname=ath0
netconf.1.status=enabled
netconf.status=enabled
resolv.nameserver.status=enabled
resolv.host.1.status=enabled
resolv.host.1.name=null
sshd.port=22
sshd.auth.passwd=enabled
sshd.status=enabled
pppoe-relay.status=disabled
ebtables.sys.eap.1.devname=ath0
ebtables.sys.eap.1.status=enabled
ebtables.sys.eap.status=enabled
ebtables.sys.status=enabled
ebtables.status=enabled
wpasupplicant.status=enabled
wpasupplicant.profile.1.network.2.status=disabled
wpasupplicant.profile.1.network.2.priority=2
wpasupplicant.profile.1.network.2.key_mgmt.1.name=NONE
wpasupplicant.profile.1.network.1.status=enabled
wpasupplicant.profile.1.network.1.ssid=null
wpasupplicant.profile.1.network.1.psk=null
wpasupplicant.profile.1.network.1.proto.1.name=RSN
wpasupplicant.profile.1.network.1.priority=100
wpasupplicant.profile.1.network.1.pairwise.1.name=CCMP
wpasupplicant.profile.1.network.1.key_mgmt.1.name=WPA-PSK
wpasupplicant.profile.1.network.1.eap.1.status=disabled
wpasupplicant.profile.1.name=AUTO
wpasupplicant.device.1.status=enabled
wpasupplicant.device.1.profile=AUTO
wpasupplicant.device.1.devname=ath0
wireless.1.wds.status=enabled
wireless.1.status=enabled
wireless.1.ssid=null
wireless.1.signal_led_status=enabled
wireless.1.signal_led4=65
wireless.1.signal_led3=73
wireless.1.signal_led2=80
wireless.1.signal_led1=94
wireless.1.security.type=none
wireless.1.rate.mcs=-1
wireless.1.rate.auto=enabled
wireless.1.mcast.enhance=0
wireless.1.mac_acl.status=disabled
wireless.1.mac_acl.policy=allow
wireless.1.l2_isolation=disabled
wireless.1.hide_ssid=disabled
wireless.1.devname=ath0
wireless.1.amsdu=3
wireless.1.ampdu.status=enabled
wireless.1.ampdu.frames=32
wireless.status=enabled
users.2.uid=100
users.2.status=disabled
users.2.shell=/bin/false
users.2.gid=100
users.1.status=enabled
users.1.name=ubnt
users.status=enabled
update.check.status=enabled
unms.uri=wss://linkup.unmsapp.com:443+MEXzvj5HCWA0T13aptNheSx7lfBiIbHjUIyjqE5l_YcAAAAA+allowUntrustedCertificate
unms.unms_redirector=enabled
unms.status=enabled
telnetd.status=disabled
telnetd.port=23
system.timezone.name=EET
system.timezone=EET-2EEST,M3.5.0/3,M10.5.0/4
system.poe_passthrough=disabled
system.leds.nightmode=disabled
system.external.reset=enabled
system.date.timestamp=202503180000
system.date.status=enabled
system.cfg.version=65547
system.autosend_crash_reports=disabled
system.airosx.prov.status=disabled
syslog.status=enabled
syslog.remote.status=disabled
syslog.remote.port=514
snmp.status=enabled
snmp.location=KentonOnSea
snmp.contact=noc@linkup.co.za
snmp.community=wifimon
radio.1.txpower=25
radio.1.status=enabled
radio.1.scanbw.status=disabled
radio.1.scan_list.status=disabled
radio.1.rx_sensitivity=-96
radio.1.reg_obey=disabled
radio.1.rc_mode=0
radio.1.ptpmode=0
radio.1.pollingpri=2
radio.1.pollingnoack=0
radio.1.polling_ff_sta_rx_rssi_th=0
radio.1.polling_ff_flex=0
radio.1.polling_ff_dur=0
radio.1.polling_ff_dl_ratio=50
radio.1.polling=enabled
radio.1.obey=enabled
radio.1.mode=managed
radio.1.low_txpower_mode=disabled
radio.1.ieee_mode=auto
radio.1.freq=5480
radio.1.ff_cap_rep=0
radio.1.dfs.status=enabled
radio.1.devname=ath0
radio.1.cwm.mode=1
radio.1.cwm.enable=0
radio.1.countrycode=710
radio.1.cmsbias=0
radio.1.chanbw=0
radio.1.center.1.freq=5480
radio.1.cable.loss=0
radio.1.atpc.threshold=36
radio.1.atpc.status=disabled
radio.1.atpc.sta.status=enabled
radio.1.antenna.id=1
radio.1.antenna.gain=13
radio.1.acktimeout=34
radio.1.ackdistance=400
radio.1.ack.auto=enabled
radio.status=enabled
radio.countrycode=710
pwdog.status=disabled
pwdog.retry=3
pwdog.period=300
pwdog.delay=300
ntpclient.1.status=enabled
ntpclient.1.server=time.google.com
ntpclient.status=enabled
netmode=router
httpd.status=enabled
httpd.session.timeout=900
httpd.port=80
httpd.https.status=enabled
httpd.https.port=443
gui.network.advanced.status=disabled
gui.language=en_US
discovery.status=enabled
discovery.lldp.status=enabled
discovery.cdp.status=disabled
discovery.beacon.status=enabled
airview.status=enabled
aaa.1.wpa.psk=null
aaa.1.status=disabled
aaa.1.radius.auth.1.port=1812
aaa.1.radius.acct.1.status=disabled
aaa.1.radius.acct.1.port=1813
users.1.password=$1$min2MIGq$kgpNWVshoyhh/hbloxNEy1`,

    // ============================================
    // CAMBIUM RADIO TEMPLATE
    // ============================================
    'cambium-radio': `{
    "template_props": {
        "templateName": "",
        "templateDescription": "",
        "device_type": "",
        "version": "5.10.0"
    },
    "device_props": {
        "acsEnable": "0",
        "bcPriority": "0",
        "cambiumIPAliasesEnable": "0",
        "cambiumAccelerationEngine": "1",
        "cambiumNSSAcceleratedConn": "8192",
        "cambiumNSSAcceleratedIPv4Conn": "7168",
        "cambiumNSSAcceleratedIPv6Conn": "1024",
        "dataVLANEnable": "0",
        "mcastVLANEnable": "0",
        "networkRelaydEnable": "0",
        "dhcpLanEnable": "1",
        "dhcpLanLimit": "25",
        "dhcpLanStart": "2",
        "dhcpLanLeasetime": "24",
        "dhcpOption82": "0",
        "dhcpOption82CircuitIDType": "0",
        "dhcpOption82CircuitValue": "",
        "dhcpOption82RemoteIDType": "0",
        "dhcpOption82RemoteValue": "",
        "dhcpOption66": "1",
        "cambiumSSHServerEnable": "1",
        "cambiumSSHServerPort": "22",
        "cambiumSSHServerDeprecatedAlgorithms": "0",
        "cambiumTelnetServerEnable": "0",
        "cambiumTelnetServerPort": "23",
        "crashReporterEnable": "1",
        "dmzEnable": "0",
        "dmzAllowICMP": "1",
        "httpPort": "80",
        "httpsPort": "443",
        "uhttpdMainInactLogout": "1",
        "l2FirewallEnable": "0",
        "l2WanRemoteAccess": "0",
        "l2LanRemoteAccess": "0",
        "l2SnmpLanRemoteAccess": "1",
        "l2DHCPServersBelowSTA": "0",
        "l3FirewallEnable": "0",
        "mcPriority": "0",
        "mgmtVLANEnable": "0",
        "networkBridgeDNSIPAddrPrimary": "",
        "networkBridgeDNSIPAddrSecondary": "",
        "networkBridgeGatewayIP": "",
        "networkBridgeIPAddr": "192.168.0.2",
        "networkBridgeIPv6Addr": "",
        "networkBridgeIPAddressMode": "2",
        "networkBridgeIPv6AddressMode": "2",
        "networkBridgeMTU": "1538",
        "networkBridgeNetmask": "255.255.255.0",
        "networkLanAutoNegotiation": "1",
        "networkLanSpeed": "1000",
        "networkLanDuplex": "1",
        "networkLanEnabled": "1",
        "networkLanAdvertise": "47",
        "networkLan2Enabled": "1",
        "networkLan2AutoNegotiation": "1",
        "networkLan2Speed": "1000",
        "networkLan2Duplex": "1",
        "networkLan2PoEEnabled": "0",
        "networkLan2MTU": "1538",
        "networkLanDNSIPAddrPrimary": "8.8.8.8",
        "networkLanDNSIPAddrSecondary": "1.1.1.1",
        "networkLanIPAddr": "192.168.90.1",
        "networkLanIPv6Addr": "",
        "networkLanIPAddressMode": "1",
        "networkLanIPv6AddressMode": "1",
        "networkLanIPv6AddressType": "0",
        "networkLanIPv6DHCPServer": "0",
        "networkLanMTU": "1538",
        "networkLanNetmask": "255.255.255.0",
        "networkLanSmartSpeedMode": "1",
        "networkBroadcastStormEnabled": "0",
        "networkBroadcastStormRate": "1000",
        "networkLanDefaultIP": "169.254.1.1",
        "mgmtIFEnable": "0",
        "mgmtIFVLAN": "0",
        "mgmtIFIPAddressMode": "2",
        "mgmtIFIPv6AddressMode": "2",
        "mgmtIFNetmask": "255.255.255.0",
        "mgmtIFGateway": "",
        "networkMode": "1",
        "networkSTP": "0",
        "networkPortSecurity": "0",
        "networkPortSecurityMax": "5",
        "networkPortSecurityAgingTime": "300",
        "networkWanGatewayIP": "",
        "networkWanIPAddr": "192.168.0.2",
        "networkWanIPv6Addr": "",
        "networkWanIPv6LocalInterfaceId": "::dead:beef",
        "networkWanIPAddressMode": "2",
        "networkWanIPv6AddressMode": "2",
        "networkWanNetmask": "255.255.255.0",
        "networkWanPPPoE": "1",
        "networkWanPPPoEUsername": "USER_USERNAME",
        "networkWanPPPoEPassword": "USER_PASSWORD",
        "networkWanPPPoEAC": "",
        "networkWanPPPoEService": "",
        "networkWanPPPoEAuth": "0",
        "networkWanPPPoEMTU": "1492",
        "networkWanPPPoEKeepAlive": "10",
        "networkWanPPPoEAttempts": "5",
        "networkWanPPPoEMSSClamping": "0",
        "networkPPPoEIAEnable": "0",
        "networkUPNP": "0",
        "networkNATPMP": "0",
        "networkLLDP": "1",
        "networkLLDPMode": "1",
        "networkMACTELNET": "0",
        "networkMACTELNETProto": "1",
        "mcastGroupLimit": "3",
        "portForwardingEntryEnable": "0",
        "portForwardingSepMangIPEntryEnable": "0",
        "qosEnable": "0",
        "snmpAgentPort": "161",
        "snmpRemoteAccess": "0",
        "snmpDomainAccessEnable": "0",
        "snmpDomainAccessIP": "",
        "snmpDomainAccessIPMask": "",
        "snmpReadOnlyCommunity": "public",
        "snmpReadWriteCommunity": "private",
        "snmpSystemName": "CambiumNetworks",
        "snmpTrapCommunity": "cambiumtrap",
        "snmpTrapEnable": "0",
        "snmpProtocolVersion": "1",
        "snmpLinkTrapEnable": "1",
        "systemConfigDeviceName": "USER_DEVICENAME",
        "cambiumDeviceNameLoginDisplay": "1",
        "systemConfigOperationalLicense": "",
        "systemConfigTimezone": "SAST-2",
        "systemConfigLanguage": "en",
        "powerSequenceFactoryDefault": "0",
        "systemConfigStartDHT": "8",
        "systemConfigStopDHT": "12",
        "systemConfigPreheatStopTemp": "5",
        "systemConfigPreheatStopTimeout": "20",
        "dlkmNATSIPHelpers": "1",
        "syslogServerIPFirst": "",
        "syslogServerPortFirst": "514",
        "syslogServerIPSecond": "",
        "syslogServerPortSecond": "514",
        "syslogServerIPThird": "",
        "syslogServerPortThird": "514",
        "syslogServerIPFourth": "",
        "syslogServerPortFourth": "514",
        "syslogServerLogMask": "15",
        "syslogServerLogToWeb": "0",
        "syslogServerLogDA": "1",
        "syslogServerLogCLISH": "1",
        "systemNtpServerIPMode": "2",
        "systemConfigFactoryResetKeepPwd": "0",
        "voipEnable": "0",
        "webService": "3",
        "wirelessAcceptableAPRSSIThreshold": "-90",
        "wirelessAcceptableAPSNRThreshold": "0",
        "wirelessSmartAntennaEnabled": "1",
        "wirelessCellSizeUnit": "2",
        "wirelessDeviceCountryCode": "FA",
        "wirelessDefaultCountryCode": "OT",
        "wirelessInterfaceEncryption": "2",
        "wirelessInterfaceCipher": "1",
        "wirelessInterfaceEncryptionKey": "Cam39-Tai!wdmv",
        "wirelessInterfaceiFreqReuseMode": "0",
        "wirelessInterfaceGuardInterval": "2",
        "wirelessInterfaceHTMode": "1",
        "wirelessInterface2HTMode": "1",
        "wirelessInterfaceMode": "2",
        "wirelessInterfaceProtocolMode": "1",
        "wirelessInterfacePTPMode": "1",
        "wirelessInterfaceScanFrequencyBandwidth": "3",
        "wirelessInterface2ScanFrequencyBandwidth": "3",
        "wirelessInterfaceScanFrequencyListTwenty": "",
        "wirelessInterface2ScanFrequencyListTwenty": "",
        "wirelessInterfaceScanFrequencyListForty": "",
        "wirelessInterface2ScanFrequencyListForty": "",
        "wirelessInterfaceScanFrequencyListTen": "",
        "wirelessInterface2ScanFrequencyListTen": "",
        "wirelessInterfaceScanFrequencyListFive": "",
        "wirelessInterface2ScanFrequencyListFive": "",
        "wirelessInterfaceScanFrequencyListEighty": "",
        "wirelessInterface2ScanFrequencyListEighty": "",
        "wirelessInterfaceSSID": "Cambium-AP",
        "wirelessInterfaceSyncSource": "3",
        "wirelessInterfaceSyncHoldTime": "1000",
        "wirelessInterfaceTXPower": "15",
        "wirelessInterface2TXPower": "15",
        "wirelessInterfaceTDDAntennaGain": "13",
        "wirelessInterfaceTDDRatio": "2",
        "wirelessInterfaceTPCTRL": "-45",
        "wirelessInterfaceTPCMode": "2",
        "wirelessInterfaceRateMinMCS": "21",
        "wirelessInterfaceRateMaxMCS": "39",
        "wirelessInterfaceSTAMaxDLMCSLimit": "255",
        "wirelessFBCompatibility": "1",
        "wirelessMaximumCellSize": "3",
        "wirelessMaximumSTA": "1",
        "wirelessMIREnable": "0",
        "wirelessInterfaceMgmtRadioBoarddata": "0",
        "wirelessRadiusTimeout": "5",
        "wirelessRadiusRetry": "5",
        "wirelessRadiusGUIUserAuth": "0",
        "wirelessRadiusIdentityStr": "anonymous",
        "wirelessRadiusIdentityRealm": "cambiumnetworks.com",
        "wirelessRadiusUsername": "cambium-station",
        "wirelessRadiusPassword": "cambium123",
        "useMACAddressAsWirelessRadiusUsername": "0",
        "wirelessRadiusUseDefaultCertificate": "1",
        "wirelessRadiusUsePMP450Certificate": "1",
        "wirelessSTAPriority": "0",
        "wirelessSecurityMethod": "1",
        "wirelessStaIsolate": "0",
        "wirelessClientBridgeMode": "0",
        "wirelessInterfaceTDDFrameSize": "5000",
        "wirelessInterfaceColocState": "0",
        "wirelessInterfaceColocSystemSyncSrc": "5",
        "wirelessInterface1KeepAliveEnable": "0",
        "wirelessInterface1KeepAliveEPTPEnable": "1",
        "wirelessInterfaceSuRxBfOff": "0",
        "wirelessInterface2SuRxBfOff": "0",
        "wirelessInterface1KeepAlivePMPEnable": "1",
        "wirelessAPForcedSector": "1",
        "wirelessMUMIMOEnable": "2",
        "wirelessMUMIMOSoundingInterval": "10",
        "wirelessMUMIMOSoundingAzimuthCycle": "180",
        "wirelessMUMIMOCBFRateAdapt": "1",
        "wirelessMUMIMOCBFRateAdaptIndex": "7",
        "wirelessRadioTransmissionOptimization": "2",
        "systemConfigSWLockBit": "0",
        "systemConfigHWLockBit": "0",
        "systemConfigSCLockBit": "0",
        "systemConfigSMLimit": "12",
        "systemConfigLockedCC": "",
        "systemConfigBIB": "ff",
        "systemConfigMinAntGain": "13",
        "systemConfigIPv6Support": "0",
        "wirelessTXPowerManualLimit": "0",
        "wirelessTXPowerManualLimit2": "0",
        "staticRoutesEnableMain": "0",
        "cambiumDeviceAgentEnable": "1",
        "cambiumDeviceAgentCNSURL": "https://cloud.cambiumnetworks.com",
        "cambiumCNSDeviceAgentID": "",
        "cambiumCNSDeviceAgentPassword": "",
        "cambiumDeviceAgentZeroTouchEnable": "1",
        "cambiumDeviceAgentMGMTRoutingEnable": "0",
        "dpiEnable": "0",
        "dpiQoSEnable": "0",
        "dpiLogLevel": "system",
        "dpiLogComponents": "all",
        "wirelessMACFilter": "0",
        "wirelessMACFilterPolicy": "1",
        "spectralEnable": "0",
        "watchdogEnable": "0",
        "watchdogMode": "1",
        "watchdogTargetIPAddress": "",
        "watchdogPingInterval": "10",
        "watchdogPingRetries": "4",
        "watchdogRFEnable": "0",
        "watchdogRFRSSIThreshold": "20",
        "watchdogRFSNRThreshold": "20",
        "watchdogRFCountThreshold": "2",
        "cambiumGPSConfigResetTimeout": "900",
        "wirelessPMPWDSUnknownMACFlood": "0",
        "dcsEnable": "0",
        "dcsLogFile": "/tmp/log/dcsd.log",
        "dcsFrequencyListTwenty": "",
        "dcsFrequencyListForty": "",
        "dcsFrequencyListEighty": "",
        "dcsSwitchThreshold": "4",
        "dcsSwitchMinHoldTime": "180",
        "dcsThroughputDropThreshold": "20",
        "dcsBandwidthMask": "1",
        "cambiumTR069Enable": "0",
        "cambiumTR069Port": "7547",
        "cambiumTR069ACSURL": "",
        "cambiumTR069ACSUsername": "",
        "cambiumTR069ACSPassword": "",
        "cambiumTR069Interval": "120",
        "wirelessInterfaceReconnectPrimaryAPEnable": "0",
        "wirelessInterfaceReconnectPrimaryAPPeriod": "60",
        "wirelessInterfaceReconnectPrimaryAPScanBG": "0",
        "wirelessInterfaceReconnectPrimaryAPScheduleMode": "0",
        "watchdogReconnectPrimaryAPRescanTime1": "04:00",
        "watchdogReconnectPrimaryAPRescanTime2": "16:00",
        "asymBwEnable": "1",
        "dpiQoSAppRulesTable": [],
        "wirelessMACFilterTable": [],
        "classificationListTable": [],
        "dhcpLanHostTable": [],
        "l2FirewallTable": [],
        "l3FirewallTable": [],
        "membershipVLANTable": [],
        "mappingVLANTable": [],
        "portForwardingTable": [],
        "portForwardingSepMangIPTable": [],
        "prefferedAPTable": [
          {
            "prefferedListTableEntrySSID": "null",
            "prefferedListTableEntryKEY": "",
            "prefferedListTableSecurityMethod": "6",
            "prefferedListTableEntryBSSID": ""
          }
        ],
        "snmpTrapTable": [],
        "wirelessMIRProfileTable": [
          {
            "wirelessMIRProfileNumber": "0",
            "wirelessMIRProfileDescription": "default",
            "wirelessDLMIR": "1000000",
            "wirelessULMIR": "1000000"
          }
        ],
        "wirelessRadiusServerTable": [],
        "cambiumIPAliasCnfTable": [],
        "cambiumStaticRoutesCnfTable": [],
        "networkPPPoEIATable": [],
        "snmpv3UsersTable": [],
        "lanSwitchPortTable": [],
        "wirelessRadiusUser1Certificate": "",
        "wirelessRadiusUser2Certificate": "",
        "uhttpdMainPem": "",
        "cambiumSysAccountsTable": [
          {
            "cambiumSysAccountsName": "admin",
            "cambiumSysAccountsHash": "$1$zxso6OAM$zbIx.rqvPJB/FILNSnicu0",
            "cambiumSysAccountsUID": "1000",
            "cambiumSysAccountsGID": "4",
            "cambiumSysAccountsDir": "/tmp",
            "cambiumSysAccountsShell": "/usr/bin/clish"
          },
          {
            "cambiumSysAccountsName": "installer",
            "cambiumSysAccountsHash": "!$1$yHIXrXnB$tr/Na771wSO4/dv8yCvmU/",
            "cambiumSysAccountsUID": "2000",
            "cambiumSysAccountsGID": "100",
            "cambiumSysAccountsDir": "/tmp",
            "cambiumSysAccountsShell": "/bin/false"
          },
          {
            "cambiumSysAccountsName": "home",
            "cambiumSysAccountsHash": "!$1$/Bv9wvkq$5lBZqqsoAJj4uYOhb7pOS0",
            "cambiumSysAccountsUID": "3000",
            "cambiumSysAccountsGID": "100",
            "cambiumSysAccountsDir": "/tmp",
            "cambiumSysAccountsShell": "/bin/false"
          },
          {
            "cambiumSysAccountsName": "readonly",
            "cambiumSysAccountsHash": "!$1$zn4/PlCl$1qP9PGmPChDwkDAgp5Qgw0",
            "cambiumSysAccountsUID": "4000",
            "cambiumSysAccountsGID": "100",
            "cambiumSysAccountsDir": "/tmp",
            "cambiumSysAccountsShell": "/bin/false"
          },
          {
            "cambiumSysAccountsName": "dashboard",
            "cambiumSysAccountsHash": "$1$Y9oz6eRg$ysokBk9VZCGo4AN6WQgVF0",
            "cambiumSysAccountsUID": "5000",
            "cambiumSysAccountsGID": "100",
            "cambiumSysAccountsDir": "/tmp",
            "cambiumSysAccountsShell": "/bin/false"
          }
        ]
    }
}`,

    // ============================================
    // ROUTER TEMPLATES (all coming soon)
    // ============================================
    
    // Reyee Router Template (coming soon)
    'reyee-router': `# Reyee Router Config Template
# Coming soon!
ppp.1.password=USER_PASSWORD
ppp.1.name=USER_USERNAME`,

    // Cudy Router Template (coming soon)
    'cudy-router': `# Cudy Router Config Template
# Coming soon!
ppp.1.password=USER_PASSWORD
ppp.1.name=USER_USERNAME`,

    // MikroTik Router Template (coming soon)
    'mikrotik-router': `# MikroTik Router Config Template
# Coming soon!
ppp.1.password=USER_PASSWORD
ppp.1.name=USER_USERNAME`
};

console.log('✅ Config templates loaded:', Object.keys(CONFIG_TEMPLATES).length, 'templates available');
console.log('📋 Available templates:', Object.keys(CONFIG_TEMPLATES).join(', '));
