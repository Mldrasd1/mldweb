import { NextResponse } from "next/server"
import connectToDB from "@/app/lib/db";
import Appointment from "@/models/Appointment";



  export async function DELETE(request) {
  try {
    await connectToDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    await Appointment.findByIdAndDelete(id);
    return NextResponse.json({ message: "Appointment deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    return NextResponse.json({ message: "Failed to delete appointment" }, { status: 500 });
  }
}