# Advanced BMI Calculator Application

A user-friendly web application designed to compute Body Mass Index (BMI) based on age, gender, height, and weight metrics.

## BMI Classification Table
* **Severe Thinness:** < 16
* **Moderate Thinness:** 16 - 17
* **Mild Thinness:** 17 - 18.5
* **Normal:** 18.5 - 25
* **Overweight:** 25 - 30
* **Obese Class I:** 30 - 35
* **Obese Class II:** 35 - 40
* **Obese Class III:** > 40

---

## Docker Operations Documentation

### 1. Build the Docker Image
Build the local image using the custom configuration file:
```bash
docker build -t bmi-calculator:v1 .
