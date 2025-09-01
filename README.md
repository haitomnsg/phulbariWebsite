Phulbari - Flower Classification & Moisture Detection
Phulbari is an AI-powered mobile application that integrates deep learning and IoT technology to classify flowers and automate plant care. It uses Convolutional Neural Networks (CNNs) for flower classification and an IoT-based irrigation system to monitor soil moisture levels and water plants when necessary.

Features
Flower Classification: Uses a deep learning model (ResNet101V2) trained on 100 flower species to accurately identify flowers from images.
Plant Care Information: Provides detailed information about flowers, including their care requirements like watering schedules, sunlight exposure, and propagation methods.
Automated Watering System: Utilizes an ESP32 microcontroller and soil moisture sensors to monitor plant hydration levels and automatically activate watering when needed.
Mobile Application: Built using Java and TensorFlow Lite for real-time flower recognition and IoT device control.
Cloud Integration: Uses Firebase to store and display real-time moisture data and irrigation history.
Screenshots
Android App
hjhfdlk

IoT Device
1741266668788

AI Model
Accuracy and Loss

Frame 3

Model Architecture

model_architecture (Small)

Technologies Used
AI Model:
Deep Learning Framework: TensorFlow & Keras
Architecture: ResNet101V2
Dataset: 100 flower classes, 300 images per class (collected via Web Scraping & PlantNet)
Mobile Application:
Platform: Android (Java, Android Studio)
Camera Integration: CameraX API for capturing images
Local Storage: SQLite for storing user preferences and plant details
IoT Integration:
Microcontroller: ESP32
Sensors: Soil Moisture Sensor, DHT11 Temperature and Humidity Sensor
Watering Mechanism: DC Mini Water Pump controlled via Relay Module
Cloud Services: Firebase Realtime Database for sensor data storage
System Architecture
AI-based Classification:
User captures an image of a flower using the mobile app.
The TensorFlow Lite model classifies the flower and retrieves related information.
IoT-based Watering:
Soil moisture sensor reads real-time data.
If moisture is below the threshold, the ESP32 activates the water pump.
The app displays real-time updates from Firebase.
Installation and Usage
Prerequisites:
Android 7.0+ device
Internet connection for Firebase synchronization
ESP32 microcontroller setup with sensors (for IoT functionality)
Steps to Run the Application:
Clone this repository:
git clone https://github.com/yourusername/Phulbari.git
Open the project in Android Studio.
Build and install the APK on your Android device.
Connect the IoT hardware setup (ESP32 + sensors) and ensure it’s linked to Firebase.
Launch the app, capture a flower image, and receive classification and care information.
Monitor soil moisture levels and let the system automate watering.
