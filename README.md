# Mobile Legends Draft Pick Overlay

A web-based overlay designed for streaming or community tournaments for Mobile Legends: Bang Bang. This tool supports Ban 6 and Ban 10 modes with a clean and responsive interface to be used as a browser source in OBS or other streaming applications.

## 🌟 Key Features

* **Flexible Ban Modes**: Supports Ban 6 and Ban 10 systems according to tournament needs.
* **Complete Hero Assets**: Equipped with the latest Mobile Legends hero image library.
* **Sound Effects & BGM**: Includes draft background audio, ban sounds, pick sounds, and "Godlike" sound effects.
* **Match Control**: Features to select match format (BO1/BO3) and team management.
* **Professional Design**: Uses the Bebas Neue font for a modern and competitive look.

## 📋 System Requirements

To run this overlay locally correctly, you will need:

1.  **Visual Studio Code** (VS Code).
2.  **Live Server** extension by Ritwick Dey (Required so audio and image assets can load with the proper protocol).

## 🚀 Usage Instructions

1.  Open the `mobilelegends-draftpick-overlay` project folder using VS Code.
2.  Ensure the **Live Server** extension is installed. If not:
    * Open the *Extensions* menu (Ctrl+Shift+X).
    * Search for "Live Server".
    * Click *Install*.
3.  Find the `index.html` file in the VS Code sidebar.
4.  Right-click on the `index.html` file, then select **Open with Live Server**.
5.  Your browser will automatically open and display the overlay.
6.  Copy the URL that appears in the browser (usually `http://127.0.0.1:5500/index.html`) into OBS as a **Browser Source**.

## 📂 Project Structure

* `index.html`: Main structure of the overlay page.
* `script.js`: Draft pick system logic, bans, and audio control.
* `style.css`: Appearance and layout settings for the overlay.
* `Assets/`: Folder containing hero image assets, fonts, and other UI elements.
* `Audio/`: Folder containing sound files and background music.

---
*This project was developed for educational purposes and gaming community development.*