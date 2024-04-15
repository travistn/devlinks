import { NextRequest, NextResponse } from 'next/server';

import { connectToDb } from '@/utils/mongodb';
import Link from '@/models/link';

export const DELETE = async (req: NextRequest) => {
  const { _id } = await req.json();

  try {
    await connectToDb();

    await Link.findByIdAndDelete(_id);

    return NextResponse.json('Link successfully deleted.', { status: 200 });
  } catch (error) {
    return NextResponse.json('Failed to delete link.', { status: 500 });
  }
};
