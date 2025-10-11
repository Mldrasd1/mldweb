import { NextResponse } from "next/server";
import connectToDB from "@/app/lib/db";
import Appointment from "@/models/Appointment";

export async function POST(request) {
  try {
    await connectToDB();
    const body = await request.json();
    const newAppointment = await Appointment.create(body);
    return NextResponse.json(newAppointment, { status: 201 });
  } catch (error) {
    console.error("Error creating appointment:", error);
    // In development return the error message to aid debugging
    if (process.env.NODE_ENV === 'development') {
      return NextResponse.json({ message: "Failed to create appointment", error: String(error) }, { status: 500 });
    }
    return NextResponse.json({ message: "Failed to create appointment" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDB();
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    return NextResponse.json(appointments, { status: 200 });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json({ message: "Failed to fetch appointments" }, { status: 500 });
  }
}

