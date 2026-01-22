## Buổi 1: Getting started with Playwright

## Playwright
- Là một framework tiền thân là Puppeteer, được Microsoft tài trợ và phát triển.

### 1. Ưu điểm
- Cross browser
- Cross platform
- Code gen
- Report đầy đủ thông tin


### 2. Cài đặt Tools
#### Cài đặt NVM
1. On Mac: `brew install nvm` 
2. On Window: *https://github.com/coreybutler/nvm-windows/releases*

#### Cài đặt Node 
- `nvm install v22.9.0`
- `nvm use 22.9.0`

#### Cài đặt Playwright
- Tạo thư mục trên local: **folder-name**
- Chạy lệnh `npm playwright@latest` (Yes or Enter hết đến khi nào hiển thị **Happy hacking!**)

## Cài đặt Git
- Máy Mac có sẵn
- Máy Window thì download *https://git-scm.com/download*

## Cài đặt tạo tài khoản GitHub
- Tạo tài khoản GitHub: *https://github.com/signup*
- Refer: *youtube.com/watch?v=MWKOBfB8I2s*

## Cài đặt VS code (Visual Studio Code)
- VS Code = IDE = integrated development environmen
- Là công cụ để viết code
- Cài đặt Visual Studio Code: *https://code.visualstudio.com/*
- Cài đặt Playwright extension: *https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright*

## Setup SSH Key
- Khi đẩy từ Code local -> cho github cần xác thực thông qa username +password (mỗi lần lên y/c đăng nhập)
=> dùng SSH key để verify một lần thôi

- Cặp khoá (2 cái) 
    - **id_rsa** và **id_rsa.pub**
    - **id_rsa**: private key - ko để lộ cho người khác biết
    - **id_rsa.pub**: public key

- Tạo ssh key:
    - Lưu ý: nếu file đã tồn tại, cần kiểm tra kỹ trước khi ghi đè.
    - Câu lệnh: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

- Lấy nội dung ssh key:  `cat~/.ssh/id_rsa.pub`


### Các lệnh đẩy project lên GitHub
- Khởi tạo repo local: `git init`
- Liên kết repository vừa tạo với Git: `git remote add origin <ssh_link>`
- Thêm code: `git add .` 
- Thêm commit: `git commit -m"init project"`
- Push code: `git push origin main`

