<h1 align="center">Weekend Planner</h1>

This is a React application for planning and managing weekend trips. The application features user authentication, data visualization, and a user-friendly interface for trip planning and management.

---
<h2 align="center">Deployment</h2>

The application is deployed at [Weekend Planner](https://my-weekend-planner.netlify.app/).

---

---
<h2 align="center">Video Walkthrough of the project</h2>

[Presentation Link](https://www.youtube.com/watch?v=ALDQgUxVJgE).

---
## Directory Structure

```plaintext
Samsung-Saviors_058/
├── public/
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── CalendarPage.jsx
│   │   ├── ContactForm.jsx
│   │   ├── ContactInfoWithMap.jsx
│   │   ├── GoogleAuth.jsx
│   │   ├── GroupSchedule.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── Plan.jsx
│   │   ├── Testimonials.jsx
│   │   ├── UpcomingEvents.jsx
│   │   ├── Widget.jsx
│   ├── images/
│   ├── pages/
│   │   ├── ServiceCard1.jsx
│   │   ├── ServiceCard2.jsx
│   │   ├── ServiceCard3.jsx
│   ├── services/
│   │   ├── authService.js
│   │   ├── firebase.js
│   ├── styles/
│   │   ├── CalendarPage.css
│   │   ├── Dashboard.css
│   ├── utils/
│   ├── App.css
```


<h2 align="center">Important Pages</h2>

### Plan.jsx

This component is responsible for displaying the main interface where users can choose dates to plan their trips. It uses Chakra UI for styling and Firebase for authentication.

- **Dependencies:**
  - `@chakra-ui/react`
  - `react-router-dom`
  - `firebase`

- **Features:**
  - Displays a background image with an overlay containing text and a button.
  - Checks user authentication before allowing date selection.
  - Shows a toast notification if the user is not authenticated.

### ServiceCard1.jsx

This component displays the user dashboard with data visualizations of trip information. It uses Chart.js for rendering charts.

- **Dependencies:**
  - `@chakra-ui/react`
  - `react-chartjs-2`
  - `chart.js`
  - `firebase`
  - `react-router-dom`

- **Features:**
  - Fetches user data and trip information after user authentication.
  - Displays monthly bookings, top destinations, and top hotels in bar charts.
  - Shows toast notifications for errors or authentication prompts.

### ServiceCard2.jsx

This component allows users to manage their trips, including viewing, editing, and deleting trip details. It provides sorting and search functionality.

- **Dependencies:**
  - `@chakra-ui/react`
  - `react-router-dom`

- **Features:**
  - Fetches trip data from the backend service.
  - Allows sorting trips by date, start time, and end time in ascending or descending order.
  - Provides a search bar for filtering trips by destination.
  - Includes functionality for editing and deleting trips with real-time updates.

### ServiceCard3.jsx

This component allows users to create and manage a detailed itinerary for their trips. It provides functionality for adding, editing, and deleting activities for each day of the trip.

- **Dependencies:**
  - `@chakra-ui/react`
  - `react-chartjs-2`
  - `chart.js`
  - `react-router-dom`

- **Features:**
  - Provides an interface for adding and managing activities for each day of the trip.
  - Allows users to edit details like start time, end time, activity description, and budget.
  - Calculates and displays the total budget for the trip.
  - Visualizes the number of activities per day using a bar chart.

<h2 align="center"> Getting Started</h2>

### Prerequisites

- Node.js and npm
- Firebase project for authentication and data storage

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Hari3199/-Samsung-Saviors_058.git
    ```
2. Navigate to the project directory:
    ```bash
    cd -Samsung-Saviors_058.git
    ```
3. Install dependencies:
    ```bash
    npm run dev
    ```

### Firebase Configuration

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Add your Firebase configuration to `src/services/firebase.js`.

### Running the Application

1. Start the development server:
    ```bash
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.

<h2 align="center">Usage</h2>

- Sign in to access trip planning and management features.
- Use the "Plan Your Ideal Weekend" section to start planning your trips.
- Access the user dashboard to view visualizations of your trips.
- Manage your trips, including sorting, searching, editing, and deleting trips.
- Create and manage detailed itineraries for your trips.

<h2 align="center">Features</h2>


- **User Authentication**: Secure login and registration system.
- **Data Visualization**: Visualize your weekend plans with interactive charts.
- **Responsive Design**: Works on desktop, tablet, and mobile devices.
- **Calendar Integration**: Easily manage and view your plans on a calendar interface.
- **Google Maps Integration**: Visualize your destinations on a map.
- **Group Scheduling**: Plan trips with multiple participants.
- **Testimonials**: Read and write reviews about trips.
- **Upcoming Events**: Stay informed about upcoming events.




<h2 align="center">Acknowledgements</h2>

- React
- Chakra UI for the UI components
- Firebase for backend services
- Chart.js for data visualization

<h2 align="center">Author</h2>

- **GitHub**: [Soumyadeep Dutta](https://github.com/soumyadeepdutta7)
- **LinkedIn**: [Soumyadeep Dutta](https://www.linkedin.com/in/soumyadeep-dutta-b142581a1/)

- **GitHub**: [Rajnikantkeshkar](https://github.com/Rajnikantkeshkar)
- **LinkedIn**: [Rajnikant Katwaru Keshkar	](https://www.linkedin.com/in/rajnikant-keshkar-707239262/)

- **GitHub**: [Rahul Maurya](https://github.com/rmauryaa)
- **LinkedIn**: [Rahul Maurya	](https://www.linkedin.com/in/rmaurya/)

<h2 align="center">Include screenshots as necessary.</h2>

![image](https://github.com/Hari3199/-Samsung-Saviors_058/assets/120002835/1d1fffe3-d9fb-463a-83a3-3714620f0170)

![image](https://github.com/Hari3199/-Samsung-Saviors_058/assets/120002835/80f43a74-c709-4577-9680-f586db66f939)

![image](https://github.com/Hari3199/-Samsung-Saviors_058/assets/120002835/345996fc-c172-4222-a640-7accfa977bae)

![image](https://github.com/Hari3199/-Samsung-Saviors_058/assets/120002835/53103763-bda3-4a5e-bdc7-b8ca3021d359)

![image](https://github.com/Hari3199/-Samsung-Saviors_058/assets/120002835/a24c2431-d97e-4149-a780-d7b6d3886f79)

![image](https://github.com/Hari3199/-Samsung-Saviors_058/assets/120002835/0552301a-ec68-45b8-b0f4-7ecdebaf3f51)

![image](https://github.com/Hari3199/-Samsung-Saviors_058/assets/120002835/10966a4e-5111-4ffa-b2d6-029b4b334aa9)



