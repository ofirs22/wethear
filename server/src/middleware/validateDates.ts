import { Request, Response, NextFunction } from 'express';
import { isValid, parseISO } from 'date-fns';

export const validateDates = (req: Request, res: Response, next: NextFunction) => {
  const { start_date, end_date } = req.body;
  if (!start_date || !end_date) {
    return res.status(400).json({ message: 'Missing required date parameters' });
  }

  if (!isValid(parseISO(start_date)) || !isValid(parseISO(end_date))) {
    return res.status(400).json({ message: 'Invalid date format' });
  }

  next();
}; 