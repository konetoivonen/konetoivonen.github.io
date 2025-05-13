# SecureDebian
## Purpose
SecureDebian is a SaltStack-based configuration management project designed to harden a fresh Debian system by automatically installing essential packages, enabling firewall protection (UFW), configuring secure SSH settings, managing users, and setting a custom MOTD. This project was inspired by my own experience from Tero Karvinen's [Penetration Testing Course](https://terokarvinen.com/tunkeutumistestaus/) and how a couple, simple things and tweaks, can harden a system tenfold.

## What it does:


- Implements an idempotent, code-based infrastructure hardening, which:

      - Hardens SSH, removes unnecessary packages such as Telnet
      - Enables UFW
      - Creates a secure user, and adds a warning message (MOTD).
  
The implementation uses SaltStack instead of standalone shell scripts.
A Vagrant-based test environment is used for development, consisting of one master and two minions.


# Prequisites

- [Salt](https://saltproject.io/)
    - Salt-Master
    - Salt-Minion

- [Vagrant](https://developer.hashicorp.com/vagrant)

-  [Project files](https://github.com/konetoivonen/konetoivonen.github.io/tree/main/secure-ubuntu/salt)

## License
This project is licensed under the GNU General Public License v3.0.

## Screenshots

![image](https://github.com/user-attachments/assets/98b89187-8655-4125-94f5-9df16fe02fc5)

![image](https://github.com/user-attachments/assets/50669e95-7781-4afb-84e5-393d0bd25e59)

![image](https://github.com/user-attachments/assets/2a3a53b9-a8b6-4cd6-a977-d13a256504f0)


# Author
[Konsta Toivonen](https://github.com/konetoivonen)

# Download
## Clone the repository:

    git clone https://github.com/konetoivonen.github.io/SecureDebian.git
    
## Installation and Usage
1. Install Vagrant and VirtualBox and provision three VM's using your own Vagrantfile, alternatively, you can use a Vagrantfile provided by [Tero Karvinen](https://terokarvinen.com/2023/salt-vagrant/#infra-as-code---your-wishes-as-a-text-file), from his site.
2. Optional: add the following argument to your vagrantfile to make sure the .sls files are synced with the Vagrant machines:

          config.vm.synced_folder "./SecureDebian", "/srv/salt/SecureDebian"

3. Clone this repository and move it to your Vagrant VM directory (where your Vagrantfile is)

## Launch and provision the VMs:

    vagrant up
    
## Connect to the master:

    vagrant ssh 'yourmaster'

## Make sure keys from minions are accepted and salt-commands work

    sudo salt-key -A -y
After accepting the keys, check that the connection between machines is working. This can be checked with the following command:

    sudo salt '*' test.ping
    
# And finally, apply the hardening states to all minions:

    sudo salt '*' state.apply SecureDebian

### DISCLAIMER: All configuration files are located in /srv/salt/SecureDebian, and are automatically synced via Vagrant. This project was made to work with Debian 12, compatibility with other Linux-distros or versions cannot be guaranteed.

## Sources:

[terokarvinen.com](https://terokarvinen.com/palvelinten-hallinta/)

[Salt Vagrant, Infra as Code](https://terokarvinen.com/2023/salt-vagrant/#infra-as-code---your-wishes-as-a-text-file)

[Google](google.com)

### Honorable mention goes to ChatGPT, without which this entire project would not have been possible with the excessive troubleshooting I had to do.
