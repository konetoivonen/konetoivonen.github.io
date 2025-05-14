install_ufw:
  pkg.installed:
    - name: ufw

enable_ufw:
  cmd.run:
    - name: ufw enable
    - unless: "ufw status | grep -q 'Status: active'"
    - require:
      - pkg: install_ufw

allow_ssh:
  cmd.run:
    - name: ufw allow OpenSSH
    - require:
      - cmd: enable_ufw
