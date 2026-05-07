# strapon.ton site

Static landing page for `strapon.ton` with GitHub Actions CI/CD deploy to VPS.

## Local run

```powershell
python -m http.server 8080
```

Open `http://localhost:8080`.

## GitHub setup

1. Create an empty GitHub repository.
2. Add it as remote:
   ```powershell
   git remote add origin https://github.com/<your-user>/<your-repo>.git
   ```
3. Push:
   ```powershell
   git branch -M main
   git push -u origin main
   ```

## Required GitHub Secrets

Set these in `Settings -> Secrets and variables -> Actions`:

- `VPS_HOST` - VPS IP or hostname
- `VPS_USER` - SSH user
- `VPS_PORT` - SSH port (usually `22`)
- `VPS_SSH_KEY` - private SSH key for deploy user
- `VPS_DEPLOY_PATH` - target path on server, for example `/var/www/strapon`

## VPS preparation

Install prerequisites:

```bash
sudo apt update
sudo apt install -y nginx rsync
```

Create deploy dir and set owner:

```bash
sudo mkdir -p /var/www/strapon/releases
sudo chown -R <deploy-user>:<deploy-user> /var/www/strapon
```

Nginx root should point to current release:

```nginx
server {
    listen 80;
    server_name strapon.ton;

    root /var/www/strapon/current;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Then:

```bash
sudo nginx -t
sudo systemctl reload nginx
```
