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
    if (process.env.NODE_ENV === "development") {
      return NextResponse.json(
        { message: "Failed to create appointment", error: String(error) },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { message: "Failed to create appointment" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDB();
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    return NextResponse.json(appointments, { status: 200 });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json(
      { message: "Failed to fetch appointments" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    await connectToDB();

    const url = new URL(request.url);
    const idFromQuery = url.searchParams.get("id");

    let id = idFromQuery;

    if (!id) {
      try {
        const body = await request.json();
        id = body?.id || body?._id;
      } catch (e) {}
    }

    if (!id) {
      return NextResponse.json(
        { message: "Missing id for delete" },
        { status: 400 }
      );
    }

    const deleted = await Appointment.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json(
        { message: "Appointment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Appointment deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting appointment:", error);
    return NextResponse.json(
      { message: "Failed to delete appointment" },
      { status: 500 }
    );
  }
}
