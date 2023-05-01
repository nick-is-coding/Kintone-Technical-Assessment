# Kintone Technical Assessment

This repository contains custom JavaScript code for automating inventory management in Kintone.

## File Descriptions

- lowstock.js - custom JavaScript for Item Master App
- inventoryAutomation.js - custom JavaScript for Orders App

## Pre-requisites

Before applying these customizations, ensure that the following requirements have been met:

- You have access to Kintone
- You have the proper access rights to create and edit apps and customizations
- You have already set up an Item Master App and an Orders App
- You have created the necessary fields in each app (field-code names must match the ones in the code files)

## Applying the Customizations

### lowstock.js (for Item Master App)

1. In the Kintone App Management page, select the Item Master App, and click on "Customize".
2. Click on the "JavaScript and CSS Customization" option on the left sidebar.
3. Click on the "Upload JavaScript file" button and select the lowstock.js file.
4. Click on the "Save" button.

### inventoryAutomation.js (for Orders App)

1. In the Kintone App Management page, select the Orders App, and click on "Customize".
2. Click on the "JavaScript and CSS Customization" option on the left sidebar.
3. Click on the "Upload JavaScript file" button and select the inventoryAutomation.js file.
4. Click on the "Save" button.

## Notes

- Before uploading the files, ensure that you have updated the field-code names in the code to match the ones in your Kintone app.
- The lowstock.js file changes the background color of the stock field based on its value. 
- The inventoryAutomation.js file automates inventory management for sales and purchases in the Orders App.
