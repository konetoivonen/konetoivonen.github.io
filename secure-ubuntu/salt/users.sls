create_admin_user:
  user.present:
    - name: secureadmin
    - shell: /bin/bash
    - groups:
      - sudo

set_password:
  cmd.run:
    - name: 'echo "secureadmin:StrongPassword123" | chpasswd'
