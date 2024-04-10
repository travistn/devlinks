import { NextRequest, NextResponse } from 'next/server';

import { connectToDb } from '@/utils/mongodb';
import Link from '@/models/link';
import User from '@/models/user';

export const POST = async (req: NextRequest) => {
  const { platform, url, user_id } = await req.json();

  try {
    await connectToDb();

    const newLink = await new Link({ platform, url, user_id }).save();

    const existingUser = await User.findById(user_id);

    existingUser.links.push(newLink._id);

    await existingUser.save();

    return NextResponse.json(newLink, { status: 201 });
  } catch (error) {
    return NextResponse.json('Failed to create a new link.', { status: 500 });
  }
};
