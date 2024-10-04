import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { AlertCircle, Users, ShoppingBag, FileText, Tag, HelpCircle } from 'lucide-react';
import { Dialog } from './ui/dialog'; // Adjusted import
import { Input } from './ui/input'; // Adjusted import
import { Button } from './ui/button'; // Adjusted import
import { Slider } from './ui/slider'; // Adjusted import
import StatCard from './StatCard';  // Import the StatCard component
import { formatCurrency } from '../utils/formatCurrency'; // Import formatCurrency utility function

const mockChartData = [
  { date: '2021-02-03', users: 0 },
  { date: '2021-02-04', users: 0 },
  { date: '2021-02-05', users: 0 },
  { date: '2021-02-06', users: 0 },
  { date: '2021-02-07', users: 0 },
  { date: '2021-02-08', users: 0 },
  { date: '2021-02-09', users: 1 },
];

const mockBlogPosts = [
  { title: 'Blended Learning: What It Is, Why It Matters & How To Apply', days: 7 },
  { title: 'Join the Course Sales Bootcamp [Free Live Workshops]', days: 12 },
  { title: '12 Steps to Creating Awesome Live Classes in 2021', days: 20 },
  { title: 'Guy Kawasaki on the Future of Business in the Midst of a Pandemic', days: 22 },
  { title: 'What is Educational Marketing & How to Use It to Grow with Examples', days: 23 },
];

const Dashboard = () => {
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [investment, setInvestment] = useState(5502500);
  const [returnRate, setReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [totalValue, setTotalValue] = useState(0);
  const [estReturns, setEstReturns] = useState(0);
  const [invites, setInvites] = useState(0);
  const [eventDuration, setEventDuration] = useState(0);

  useEffect(() => {
    const calculateReturns = () => {
      const totalValue = investment * Math.pow(1 + returnRate / 100, timePeriod);
      const estReturns = totalValue - investment;
      setTotalValue(Math.round(totalValue));
      setEstReturns(Math.round(estReturns));
    };
    calculateReturns();
  }, [investment, returnRate, timePeriod]);

  const calculateInvitePrice = () => {
    return invites * eventDuration * 10;
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-white border-b border-gray-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">+ Create course</button>
            <button className="text-gray-600 hover:text-gray-800">Preview home page</button>
            <button className="text-gray-600 hover:text-gray-800">Preview after login page</button>
            <button className="text-gray-600 hover:text-gray-800">View welcome screen</button>
            <HelpCircle className="text-teal-500" />
          </div>
        </div>
      </header>

      <main className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Your school</h2>
          <div className="flex space-x-4 border-b border-gray-200">
            <button className="text-teal-500 border-b-2 border-teal-500 pb-2">New signups</button>
            <button className="text-gray-600">Revenue</button>
            <button className="text-gray-600">Product sales</button>
            <button className="text-gray-600">Active learners</button>
          </div>
        </div>

        <div className="mb-6">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={mockChartData}>
              <XAxis dataKey="date" stroke="#718096" />
              <YAxis stroke="#718096" />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#38B2AC" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <StatCard icon={<Users size={20} />} title="All users" value="1" />
          <StatCard icon={<AlertCircle size={20} />} title="Conversions" value="0%" />
          <StatCard icon={<ShoppingBag size={20} />} title="30 days sales" value="0" />
          <StatCard icon={<FileText size={20} />} title="Courses" value="0" />
          <StatCard icon={<Tag size={20} />} title="Course categories" value="0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">New users</h2>
            <div className="bg-gray-50 p-4 rounded">
              <div className="flex items-center">
                <img src="/api/placeholder/40/40" alt="User avatar" className="rounded-full mr-2" />
                <div>
                  <p className="font-semibold">hubx</p>
                  <p className="text-sm text-gray-500">24 minutes ago</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">How to sell courses blog</h2>
            <ul className="space-y-2">
              {mockBlogPosts.map((post, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-teal-500 hover:underline cursor-pointer">{post.title}</span>
                  <span className="text-gray-500 text-sm">{post.days} days ago</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Events Log</h2>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">hubx</p>
              <p className="text-sm">Logged in</p>
              <p className="text-sm text-teal-500 hover:underline cursor-pointer">more info</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button 
            onClick={() => setIsInviteOpen(true)}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
          >
            Invite
          </Button>
        </div>
      </main>

      <Dialog open={isInviteOpen} onOpenChange={setIsInviteOpen}>
        <div className="sm:max-w-[600px]">
          <h3 className="text-lg font-semibold">Invite and Investment Calculator</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Number of Invites</label>
              <Input
                type="number"
                value={invites}
                onChange={(e) => setInvites(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Event Duration (hours)</label>
              <Slider
                value={[eventDuration]}
                onValueChange={(value) => setEventDuration(value[0])}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Investment Amount (INR)</label>
              <Input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Return Rate (%)</label>
              <Input
                type="number"
                value={returnRate}
                onChange={(e) => setReturnRate(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time Period (years)</label>
              <Input
                type="number"
                value={timePeriod}
                onChange={(e) => setTimePeriod(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <h4 className="font-semibold">Estimated Returns: {formatCurrency(estReturns)}</h4>
              <h4 className="font-semibold">Total Value: {formatCurrency(totalValue)}</h4>
              <h4 className="font-semibold">Calculated Invite Price: {formatCurrency(calculateInvitePrice())}</h4>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Dashboard;
