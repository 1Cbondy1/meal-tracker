# Meal Tracking App
Keeping track of your child’s meals shouldn’t be a guessing game. This app offers a playful, animated interface that makes logging daily meals simple and engaging. The main screen updates in real time to showcase the most recent entry in a stylized visual canvas, while a scrollable side panel keeps a clear, organized history of past meals at your fingertips.

# Instructions:
- Ensure you have the following installed on your system: Docker, Node.js, & npm
- Unzip the project and run `npm install` (app was built using node v22.14 and npm v11.3)
- Create an .env file at the project root directory and add the lines: \
`REACT\_APP\_API\_KEY=`(YOUR API KEY HERE) \
`REACT\_APP\_API\_BASE_URL=http://localhost:3001` \
`REACT\_APP\_SOCKET\_URL=http://localhost:3001`
- Create the external network `app_network` manually by using the command: `docker network create app_network`
- From the project root, start up your services using the command: `docker-compose up -d`
- You should now be able to view the app at `http://localhost:3000`

# Third Party Libraries:
- Tailwind CSS - enabled quick layout styling and responsive design with consistency across components.
- Framer Motion - made it really easy to implement seamless animations and transitions, helping bring the background and UI elements to life.
- Lottie - used to display the lightweight, scalable animations for each meal using JSON-based assets.
- Date FNS - made it easy to format and manipulate timestamps in a readable way.
