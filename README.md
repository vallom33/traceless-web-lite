# 🌱 TraceLess Web  
### *Le web qui trace, sans traces – Nuit de l’Info 2025*

TraceLess Web is an **experimental ultra-light, eco-designed website** inspired by the **Gemini protocol**.  
Its goal is to demonstrate what the modern web could look like if we prioritize:

- **Minimal bandwidth consumption**  
- **Respect for user privacy**  
- **Text-first content**  
- **Optional multimedia**  
- **Accessibility & inclusivity**  
- **Compatibility with terminal browsers (w3m, links)**  

This project was created for the Nuit de l’Info challenge **“Le web qui trace, sans traces”**.

---

## 🚀 Live Demo  
👉 **Demo:** https://traceless-web-lite.vercel.app/
👉 **Source Code:** https://github.com/vallom33/traceless-web-lite

---

## 🎯 Objectives of the Challenge

The challenge requires building a web application that:
- Uses **one request per page** whenever possible  
- Loads **media only on demand**  
- Keeps initial page weight **below 50KB**  
- Ensures **keyboard accessibility** and strong color contrast  
- Uses **semantic HTML** and minimal dependencies  
- Can be browsed through **terminal browsers** (text-only experience)  
- Demonstrates **eco-conception principles**  

TraceLess Web fulfills all these criteria.

---

## 🌐 Project Philosophy

Modern websites often:
- Load large scripts  
- Track user behavior  
- Consume high bandwidth  
- Depend on heavy frameworks  
- Hide content behind animations and ads  

**TraceLess Web takes the opposite direction.**

This project is a **practical demonstration** that a website can be:
- Fast  
- Lightweight  
- Respectful  
- Accessible  
- Understandable  
- And pleasant to use  

…without sacrificing clarity or aesthetics.

It also illustrates how digital sobriety reduces **energy consumption**, **hosting costs**, and **environmental impact**.

---

## 🧭 Site Structure

The project contains four simple, semantic HTML pages:

### 1. `/` – Home  
- Introduces eco-conception and the project's philosophy  
- Displays estimated page weight  
- Shows number of required requests  
- Pure HTML + minimal inline CSS  

### 2. `/eco-conception`  
- Educational page describing:
  - Digital sobriety  
  - Reducing JavaScript  
  - Prioritizing text  
  - Avoiding heavy fonts  
  - Limiting tracking  
  - Designing for low bandwidth  
- Fully readable in terminal browsers  

### 3. `/experimentation`  
- Interactive demonstration of **optional media loading**  
- Images are **not loaded by default**  
- Clicking a button loads tiny media files  
- Page weight indicator updates dynamically  
- Only **a few lines of vanilla JS** used  

### 4. `/code`  
- Explains technical decisions  
- Shows architecture diagram (textual)  
- Links to GitHub for full code transparency  

---

## 🏗️ Architecture Overview

