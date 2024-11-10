from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from time import sleep
import json
chrome_options = Options()
# chrome_options.add_argument("--headless")
driver = webdriver.Chrome(options=chrome_options)



rec_url = 'https://semo.edu/student-support/health-wellness/rec-services/'
text_book_rental = 'https://semo.edu/student-support/academic-support/textbook-rental/'
dinning = 'https://dineoncampus.com/semo/hours-of-operation'
printing_services = 'https://it.semo.edu/TDClient/93/IT/Home/?ID=61c268bd-6cfb-41bd-aaac-94e02bc4e16a'

# For Recreational Center
driver.get(rec_url)
sleep(2)
element = driver.find_element(By.XPATH,'/html/body/div[3]/main/div[2]/div[2]/div[2]/div/div/div/div[2]/div[1]/div')
rec_element = element.get_attribute('outerHTML')



# For Printing Services
driver.get(printing_services)
sleep(2)
printing_element = driver.find_elements(By.CSS_SELECTOR,'.desktop-module')[1]
print_element = printing_element.get_attribute('outerHTML')


# For Dinning
driver.get(dinning)
sleep(2)
dinning_element = driver.find_element(By.XPATH,'/html/body/div/div[2]/main/div/div/table')
dine_element = dinning_element.get_attribute('outerHTML')



# For Textbook Rental
driver.get(text_book_rental)
sleep(2)
textbook_element = driver.find_element(By.XPATH,'/html/body/div[2]/main/div[2]/div[2]/div[3]/div/div/div')
text_element = textbook_element.get_attribute('outerHTML')



data = {
    'Recreation Services': rec_element,
    'Dining Services': dine_element,
    'Textbook Rental': text_element,
    'Printing Services': print_element,
}

# Save the combined data to a JSON file
with open('combined_data.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, ensure_ascii=False, indent=4)

print("Combined HTML content has been saved to 'combined_data.json'.")
