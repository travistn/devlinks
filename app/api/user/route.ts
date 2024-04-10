import { NextResponse } from 'next/server';

import { connectToDb } from '@/utils/mongodb';
import User from '@/models/user';

export const GET = async () => {
  try {
    await connectToDb();

    const users = await User.find({}).populate({ path: 'links' });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json('Failed to fetch users.', { status: 500 });
  }
};
