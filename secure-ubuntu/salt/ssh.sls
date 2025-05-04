disable_root_login:
  file.replace:
    - name: /etc/ssh/sshd_config
    - pattern: '^#?PermitRootLogin.*'
    - repl: 'PermitRootLogin no'
    - append_if_not_found: True
  service.running:
    - name: ssh
    - watch:
      - file: disable_root_login
