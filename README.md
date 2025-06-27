# PHP Import Statement Sorter

> A simple VSCode extension to sort PHP `use` statements by **string length (descending)**.

---

## ✨ Features

- Automatically detects and sorts `use` import statements in PHP files.
- Sorts imports by string length (longest to shortest).
- Supports multiple `use` statements across the file.
- Lightweight and fast — perfect for modern PHP projects.

---

## 🔧 Usage

1. Open any `.php` file in VSCode.
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the command palette.
3. Run: **`PHP Import Statement Sorter: Sort Imports`**

Your `use` statements will now be sorted in descending order of length.

---

## 📸 Example

Before:

```php
use App\Models\User;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
```

After:

```php
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use App\Models\User;
```

# 🚀 Installation (Development)
1. Clone this repository:
```bash
git clone https://github.com/YOUR_USERNAME/php-import-statement-sorter.git
cd php-import-statement-sorter
```

2. Install Dependencies:
```bash
npm install
```

3. Build Extension:
```bash
npm run build
```

4. Press F5 in VSCode to launch the extension in a new Extension Development Host.

# Project Structure
```bash
├── src/              # Source TypeScript
├── dist/             # Compiled output
├── package.json      # VSCode extension manifest
├── tsconfig.json     # TypeScript config
└── README.md         # This file
```

# License
This project is licensed under the MIT License

