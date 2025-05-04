# Secure Ubuntu - Hardening Automation

![Screenshot](screenshot.png)

## Purpose
Automates the security hardening of a fresh Ubuntu server using SaltStack. Disables root login, enables firewall, removes risky packages, and sets up a secure user.

## License
GNU General Public License v3.0

## Author
Your Name or Nickname – [Your optional homepage]

## Install
```bash
git clone https://github.com/yourname/secure-ubuntu.git
cd secure-ubuntu
```

## Usage
```bash
sudo salt-call --local state.apply --file-root=./salt
```

## Screenshot
Insert a screenshot of `ufw status`, `sshd_config`, or a working login prompt with MOTD.
