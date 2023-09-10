from selenium import webdriver
from time import sleep
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By


options = webdriver.FirefoxOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--ignore-ssl-errors=yes')
options.add_argument('--start-maximized')

firefox = webdriver.Remote(command_executor="http://localhost:4444/wd/hub", options=options)

name_to_search = "alan smithee"
firefox.get(f"https://www.op.gg/summoners/br/{name_to_search}/champions")
# search_input = firefox.find_element("name", "search")

# name_to_search = "alan smithee"

# for letter in name_to_search:
#     search_input.send_keys(letter)
#     sleep(0.1)

# search_input.send_keys(Keys.ENTER)

sleep(10)

try:
    firefox.find_element(By.XPATH, "//div[@class='buttons']/button[1]").click()
    sleep(10)
    firefox.get(f"https://www.op.gg/summoners/br/{name_to_search}/champions")
    sleep(10)
    bla = firefox.find_element(By.CLASS_NAME, "name").text
    sleep(5)
    print(bla)
    sleep(5)
    firefox.quit()
except:
    firefox.quit()