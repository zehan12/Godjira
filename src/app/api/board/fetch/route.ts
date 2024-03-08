import prisma from '@/lib/prisma';
import { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = request.nextUrl;
    const boardId: string = searchParams.get('boardId') as string;
    const skip = Number(searchParams.get('skip') as string);
    const take = Number(searchParams.get('take') as string);

    if (!boardId || !skip || !take) {
      return Response.json(
        {
          error: { message: 'Fields are missing' }
        },
        { status: 400 }
      );
    }

    const board = prisma.board.findUniqueOrThrow({
      where: {
        id: boardId
      }
    });

    const boardColumn = prisma.boardColumn.findMany({
      where: {
        boardId
      }
    });

    const boardTicket = prisma.boardTicket.findMany({
      where: {
        boardId
      },
      skip,
      take
    });

    const response = await Promise.all([board, boardColumn, boardTicket]);
    const data = {
      board: response[0],
      boardColumn: response[1],
      boardTicket: response[2]
    };

    return Response.json(
      {
        success: { data }
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    return Response.json(
      {
        error: { message: 'Something went wrong!!' }
      },
      { status: 500 }
    );
  }
};
