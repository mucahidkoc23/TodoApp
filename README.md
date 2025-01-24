# TodoApp

Bu proje, kullanıcıların görevlerini (To-Do) yönetmelerine olanak tanıyan bir **To-Do uygulamasıdır**. Kullanıcılar, e-posta ve şifre ile kayıt olabilir, giriş yapabilir ve görevlerini yönetebilir. Şifreler **bcrypt** ile güvenli bir şekilde hashlenir ve kimlik doğrulama için **JWT ve çerezler (cookies)** kullanılır.

## 🚀 Kullanılan Teknolojiler

### **Backend (Sunucu Tarafı)**
- **Node.js** - Sunucu ortamı
- **Express.js** - Web çerçevesi
- **PostgreSQL** - Veritabanı
- **pg (node-postgres)** - PostgreSQL bağlantısı
- **bcrypt** - Şifre güvenliği için hashleme
- **dotenv** - Çevresel değişkenleri yönetmek için

### **Frontend (İstemci Tarafı)**
- **React.js** - Kullanıcı arayüzü
- **React Cookie** - Çerez yönetimi
- **Fetch API** - HTTP istekleri için
- **UUID** - Benzersiz ID üretimi

## 📌 Özellikler
- Kullanıcı kaydı (şifre hashlenerek saklanır)
- Görev ekleme, silme ve güncelleme
- Kullanıcı bazlı görev yönetimi
- Çerezler (Cookies) ile oturum yönetimi

---

## 🔧 Kurulum
Aşağıdaki adımları takip ederek projeyi yerel ortamınızda çalıştırabilirsiniz.

### **1️⃣ Gerekli Bağımlılıkları Yükleyin**

Öncelikle, projenin bulunduğu dizinde,client de ve server da terminali açın ve bağımlılıkları yükleyin:

```sh
npm install
```

### **2️⃣ PostgreSQL Veritabanını Kurun**

1. **PostgreSQL**'i yükleyin ve çalıştırın. (Eğer yüklü değilse [buradan](https://www.postgresql.org/download/) yükleyebilirsiniz.)
2. **pgAdmin** veya terminali kullanarak bir veritabanı oluşturun:

   ```sql
   CREATE DATABASE todoapp;
   ```

3. `todoapp` veritabanı içinde aşağıdaki tabloyu oluşturun:

   ```sql
   CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       email VARCHAR(255) UNIQUE NOT NULL,
       hashed_password TEXT NOT NULL
   );

   CREATE TABLE todos (
       id UUID PRIMARY KEY,
       user_email VARCHAR(255) REFERENCES users(email),
       title TEXT NOT NULL,
       progress INT NOT NULL,
       date TIMESTAMP DEFAULT current_timestamp
   );
   ```

### **3️⃣ .env Dosyanızı Oluşturun**

Proje server dizinine bir `.env` dosyası ekleyin ve aşağıdaki değişkenleri tanımlayın:

```
USER=postgres  # PostgreSQL kullanıcı adı
PASSWORD=yourpassword  # PostgreSQL şifresi
HOST=localhost
DBPORT=5432
DATABASE=todoapp
```

Proje client dizinine bir `.env` dosyası ekleyin ve aşağıdaki değişkenleri tanımlayın:

```
REACT_APP_SERVERURL=http://localhost:8000
```


(Şifre ve diğer bilgileri kendi yapılandırmanıza göre güncelleyin.)

### **4️⃣ Backend Sunucusunu Başlatın**

```sh
node server.js
```

Bu komut sunucuyu **http://localhost:8000/** adresinde çalıştıracaktır.

### **5️⃣ Frontend (React) Uygulamasını Çalıştırın**

```sh
cd client
npm start
```

React uygulaması **http://localhost:3000/** adresinde açılacaktır.

---

🚀 **Şimdi projeyi çalıştırabilir ve görevlerinizi yönetmeye başlayabilirsiniz!**

