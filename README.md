# Angular Task - Reusable DataTable with CRUD 

This project is a reusable, dynamic DataTable component built with **Angular 20**, **PrimeNG**, and **Formly**, supporting full **CRUD operations**, **in-place editing**, **dialog form creation**, and **loading states**. The data is managed using a mock REST API powered by **JSON Server**.

---

## 📁 Project Structure

- `AppComponent` handles:
  - Product list
  - Data operations (fetch, create, update, delete)
  - Success/error toasts

- `DataTableComponent` (reusable)
  - Accepts dynamic columns and data
  - Supports inline editing
  - Allows custom templates
  - Uses Formly forms in dialogs

---

## ⚙️ Technologies Used

- Angular 20
- PrimeNG 20
- JSON Server
- Formly + Formly PrimeNG
- Tailwind CSS (optional styling)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rawannmmohamed/angular-task.git
cd angular-task
