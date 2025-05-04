enable_ufw:
  cmd.run:
    - name: ufw enable
    - unless: ufw status | grep -q "Status: active"

allow_ssh:
  cmd.run:
    - name: ufw allow OpenSSH
