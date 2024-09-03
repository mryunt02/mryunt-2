import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutMe from './AboutMe';

describe('AboutMe Component', () => {
  test('renders the component with correct text', () => {
    render(<AboutMe />);

    // Check for the main heading
    expect(screen.getByText("Hi, 👋 I'm Buğrahan")).toBeInTheDocument();

    // Check for the role text
    expect(screen.getByText('Front-end Developer')).toBeInTheDocument();

    // Check for the description
    expect(
      screen.getByText(/Software engineer focused on developing/)
    ).toBeInTheDocument();

    // Check for location
    expect(screen.getByText('Sivas, Turkey')).toBeInTheDocument();

    // Check for education
    expect(
      screen.getByText('Sivas Cumhuriyet Üniversitesi, Computer Engineering')
    ).toBeInTheDocument();

    // Check for learning status
    expect(
      screen.getByText("These days I'm learning react query.")
    ).toBeInTheDocument();

    // Check for LinkedIn link
    expect(screen.getByText('Linkedin')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Linkedin' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/byunt'
    );

    // Check for the quote
    expect(
      screen.getByText('"May the force be with you."')
    ).toBeInTheDocument();

    // Check for the 'Reach Me' button
    expect(screen.getByRole('link', { name: /Reach Me/i })).toHaveAttribute(
      'href',
      'mailto:yuntbugrahan@gmail.com'
    );

    // Check for the 'Download CV' button
    expect(screen.getByRole('link', { name: /Download CV/i })).toHaveAttribute(
      'href',
      'cv.pdf'
    );
  });

  test('renders images with correct alt text', () => {
    render(<AboutMe />);

    // Check for the main image
    expect(screen.getByAltText('mryunt-photo')).toBeInTheDocument();

    // Check for the Darth Vader image
    expect(screen.getByAltText('darth-vader')).toBeInTheDocument();
  });
});
