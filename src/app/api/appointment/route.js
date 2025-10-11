import { NextResponse } from "next/server";
import connectToDB from "@/app/lib/db";
// If "@/models/Appointment" fails, replace with the relative path:
// import Appointment from "../../../models/Appointment";
import Appointment from "@/models/Appointment";

export async function DELETE(request, { params }) {
  try {
    await connectToDB();
    const { id } = params;

    const deleted = await Appointment.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ message: "Appointment not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Appointment deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    return NextResponse.json({ message: "Failed to delete appointment" }, { status: 500 });
  }
}

