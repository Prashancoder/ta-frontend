import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";

type Lead = {
  _id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  createdAt?: string;
};

type Appointment = {
  _id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  createdAt?: string;
};

const AdminLeads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const base = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
        const [lr, ar] = await Promise.all([
          fetch(`${base}/api/leads`),
          fetch(`${base}/api/appointments`)
        ]);
        if (!lr.ok) throw new Error("Failed to fetch leads");
        if (!ar.ok) throw new Error("Failed to fetch appointments");
        const [leadsData, apptData] = await Promise.all([lr.json(), ar.json()]);
        setLeads(leadsData);
        setAppointments(apptData);
      } catch (err: any) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-10 space-y-10">
        <Card>
          <CardHeader>
            <CardTitle>Leads</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div className="text-red-600">{error}</div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leads.map((lead) => (
                      <TableRow key={lead._id}>
                        <TableCell>{lead.createdAt ? new Date(lead.createdAt).toLocaleString() : "-"}</TableCell>
                        <TableCell>{[lead.firstName, lead.lastName].filter(Boolean).join(" ") || "-"}</TableCell>
                        <TableCell>{lead.email || "-"}</TableCell>
                        <TableCell>{lead.phone || "-"}</TableCell>
                        <TableCell className="capitalize">{lead.service || "-"}</TableCell>
                        <TableCell className="max-w-[400px] truncate" title={lead.message || undefined}>{lead.message || "-"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div className="text-red-600">{error}</div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booked At</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {appointments.map((a) => (
                      <TableRow key={a._id}>
                        <TableCell>{a.createdAt ? new Date(a.createdAt).toLocaleString() : "-"}</TableCell>
                        <TableCell>{[a.firstName, a.lastName].filter(Boolean).join(" ") || "-"}</TableCell>
                        <TableCell>{a.email || "-"}</TableCell>
                        <TableCell>{a.phone || "-"}</TableCell>
                        <TableCell>{a.date || "-"}</TableCell>
                        <TableCell>{a.time || "-"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLeads;


