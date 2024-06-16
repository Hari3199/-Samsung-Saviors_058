// src/components/CalendarPage.jsx
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  Box,
  Button,
  VStack,
  Text,
  Heading,
  Spinner,
  Center,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import { addTrip, getTrips } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tripDetails, setTripDetails] = useState({ destination: '', hotel: '', time: '', itinerary: '' });
  const [isFormVisible, setFormVisible] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const trips = await getTrips();
        setSelectedDates(trips);
      } catch (error) {
        console.error(error);
        toast({
          title: 'Authentication required',
          description: 'Please sign in to manage your trips.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        navigate('/');
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, [navigate, toast]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    const existingTrip = selectedDates.find(d => d.date instanceof Date && d.date.toDateString() === newDate.toDateString());
    setTripDetails(existingTrip ? existingTrip : { destination: '', hotel: '', time: '', itinerary: '' });
    setFormVisible(true);
  };

  const handleSaveTrip = async () => {
    try {
      await addTrip(date, tripDetails);
      setSelectedDates([...selectedDates, { date, ...tripDetails }]);
      toast({
        title: 'Trip saved',
        description: `Your trip for ${date.toDateString()} has been saved.`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setFormVisible(false);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error saving trip',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Box p={4} maxWidth="1200px" mx="auto">
      <VStack spacing={4}>
        <Heading as="h2" size="xl" mb={4}>
          Select Your Travel Dates
        </Heading>
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileClassName={({ date }) =>
            selectedDates.find(d => d.date instanceof Date && d.date.toDateString() === date.toDateString()) ? 'selected' : null
          }
        />
        {isFormVisible && (
          <Box width="100%" mt={4} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <FormControl mb={4}>
              <FormLabel>Destination</FormLabel>
              <Input
                value={tripDetails.destination}
                onChange={(e) => setTripDetails({ ...tripDetails, destination: e.target.value })}
                placeholder="Enter your destination"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Hotel</FormLabel>
              <Input
                value={tripDetails.hotel}
                onChange={(e) => setTripDetails({ ...tripDetails, hotel: e.target.value })}
                placeholder="Enter your hotel"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Time</FormLabel>
              <Input
                value={tripDetails.time}
                onChange={(e) => setTripDetails({ ...tripDetails, time: e.target.value })}
                placeholder="Enter the time of your trip"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Itinerary</FormLabel>
              <Textarea
                value={tripDetails.itinerary}
                onChange={(e) => setTripDetails({ ...tripDetails, itinerary: e.target.value })}
                placeholder="Enter your trip itinerary here..."
              />
            </FormControl>
            <Button colorScheme="teal" onClick={handleSaveTrip}>
              Save Trip
            </Button>
          </Box>
        )}
        <Button colorScheme="teal" onClick={() => navigate('/my-trips')}>
          View My Trips
        </Button>
        <Button colorScheme="teal" onClick={() => navigate('/')}>
          Back to Plan
        </Button>
      </VStack>
    </Box>
  );
};

export default CalendarPage;
