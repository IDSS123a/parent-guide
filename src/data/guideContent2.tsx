import React from 'react';
import { GuideSection } from './types';

export const guideContent2: GuideSection[] = [
  {
    id: "academic-calendar",
    title: "ACADEMIC CALENDAR 2026/2027",
    content: (
      <div className="space-y-6">
        <p>The calendar below is based on the official Decision on the School Calendar for 2026/2027, adopted by the Director of IDSS in accordance with the Statute of P.U. Internationale Deutsche Schule Sarajevo, the Law on Primary Education of Sarajevo Canton, and the Law on Preschool Education of Sarajevo Canton. The full graphic calendar is available on the school website: idss.edu.ba</p>
        
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-2">
          <p><strong>School year:</strong> 1 September 2026 – 21 June 2027</p>
          <p><strong>Semester 1:</strong> 1 Sep 2026 – 31 Jan 2027</p>
          <p><strong>Semester 2:</strong> 1 Feb 2027 – 21 Jun 2027</p>
          <p><strong>Preparation Week (staff only):</strong> 18 – 31 August 2026 | No students.</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Full Year Calendar, Key Dates</h3>
        <p className="mb-4">Colour guide: School Holiday (orange) • Public Holiday (red) • Non-teaching day (blue) • Event (purple) • Project (green)</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Period</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Dates</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Preparation Week</td>
                <td className="border border-gray-200 px-4 py-2">18 – 31 Aug 2026</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-blue-600">Non-teaching</td>
                <td className="border border-gray-200 px-4 py-2">Staff only. No students.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">First Day of School</td>
                <td className="border border-gray-200 px-4 py-2">Tue, 1 Sep 2026</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold">School</td>
                <td className="border border-gray-200 px-4 py-2">Grades 1–9 begin</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Parents Evening (1–9)</td>
                <td className="border border-gray-200 px-4 py-2">Fri, 25 Sep 2026</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-purple-600">Event</td>
                <td className="border border-gray-200 px-4 py-2">Alt. date: Mon 28 Sep</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Parents Evening (Pre.)</td>
                <td className="border border-gray-200 px-4 py-2">Mon, 28 Sep 2026</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-purple-600">Event</td>
                <td className="border border-gray-200 px-4 py-2">Preschool Group</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">German Unity Day</td>
                <td className="border border-gray-200 px-4 py-2">Sat, 3 Oct 2026</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-red-600">Public Holiday</td>
                <td className="border border-gray-200 px-4 py-2">Non-teaching day</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Autumn Holidays</td>
                <td className="border border-gray-200 px-4 py-2">19 – 23 Oct 2026</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-orange-500">School Holiday</td>
                <td className="border border-gray-200 px-4 py-2">Students free; staff working</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Halloween</td>
                <td className="border border-gray-200 px-4 py-2">Sat, 31 Oct 2026</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-purple-600">Event</td>
                <td className="border border-gray-200 px-4 py-2">Creative activity at school</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Statehood Day BiH</td>
                <td className="border border-gray-200 px-4 py-2">Wed, 25 Nov 2026</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-red-600">Public Holiday</td>
                <td className="border border-gray-200 px-4 py-2">School closed</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Thanksgiving Day</td>
                <td className="border border-gray-200 px-4 py-2">Thu, 26 Nov 2026</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-purple-600">Event</td>
                <td className="border border-gray-200 px-4 py-2">Intercultural celebration</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Laternenfest</td>
                <td className="border border-gray-200 px-4 py-2">Wed, 11 Nov 2026</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-purple-600">Event</td>
                <td className="border border-gray-200 px-4 py-2">St Martin's lantern festival</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Winter Celebration</td>
                <td className="border border-gray-200 px-4 py-2">Fri, 11 Dec 2026</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-purple-600">Event</td>
                <td className="border border-gray-200 px-4 py-2">Inclusive end-of-term event</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Catholic Christmas</td>
                <td className="border border-gray-200 px-4 py-2">Fri, 25 Dec 2026</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-red-600">Public Holiday</td>
                <td className="border border-gray-200 px-4 py-2">School closed</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Winter Holidays</td>
                <td className="border border-gray-200 px-4 py-2">21 Dec 2026 – 8 Jan 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-orange-500">School Holiday</td>
                <td className="border border-gray-200 px-4 py-2">Incl. Christmas & New Year</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">New Year's Day</td>
                <td className="border border-gray-200 px-4 py-2">Fri, 1 Jan 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-red-600">Public Holiday</td>
                <td className="border border-gray-200 px-4 py-2">School closed</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Orthodox Christmas</td>
                <td className="border border-gray-200 px-4 py-2">Thu, 7 Jan 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-red-600">Public Holiday</td>
                <td className="border border-gray-200 px-4 py-2">School closed</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Semester 2 Begins</td>
                <td className="border border-gray-200 px-4 py-2">Mon, 1 Feb 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold">School</td>
                <td className="border border-gray-200 px-4 py-2">Grades 1–9</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Carnival</td>
                <td className="border border-gray-200 px-4 py-2">Mon, 8 Feb 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-purple-600">Event</td>
                <td className="border border-gray-200 px-4 py-2">German school tradition</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Parents Evening (1–9)</td>
                <td className="border border-gray-200 px-4 py-2">Fri, 19 Feb 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-purple-600">Event</td>
                <td className="border border-gray-200 px-4 py-2">Alt. date: Mon 22 Feb</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Parents Evening (Pre.)</td>
                <td className="border border-gray-200 px-4 py-2">Mon, 22 Feb 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-purple-600">Event</td>
                <td className="border border-gray-200 px-4 py-2">Preschool Group</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Independence Day BiH</td>
                <td className="border border-gray-200 px-4 py-2">Mon, 1 Mar 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-red-600">Public Holiday</td>
                <td className="border border-gray-200 px-4 py-2">School closed</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Women's Day</td>
                <td className="border border-gray-200 px-4 py-2">Mon, 8 Mar 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-purple-600">Event</td>
                <td className="border border-gray-200 px-4 py-2">Awareness activity</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Eid al-Fitr</td>
                <td className="border border-gray-200 px-4 py-2">Tue, 9 Mar 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-red-600">Public Holiday</td>
                <td className="border border-gray-200 px-4 py-2">School closed</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Spring Holidays</td>
                <td className="border border-gray-200 px-4 py-2">29 Mar – 2 Apr 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-orange-500">School Holiday</td>
                <td className="border border-gray-200 px-4 py-2">Students free; staff working</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Catholic Easter</td>
                <td className="border border-gray-200 px-4 py-2">Sun, 28 Mar 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-red-600">Public Holiday</td>
                <td className="border border-gray-200 px-4 py-2">School closed</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Open Day</td>
                <td className="border border-gray-200 px-4 py-2">Fri, 26 Mar 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-purple-600">Event</td>
                <td className="border border-gray-200 px-4 py-2">Students as ambassadors</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Preschool Staff Training</td>
                <td className="border border-gray-200 px-4 py-2">Fri, 16 Apr 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-blue-600">Non-teaching</td>
                <td className="border border-gray-200 px-4 py-2">Preschool Group closed only</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Labor Day</td>
                <td className="border border-gray-200 px-4 py-2">Sat, 1 May & Mon 3 May 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-red-600">Public Holiday</td>
                <td className="border border-gray-200 px-4 py-2">School closed Mon 3 May</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Orthodox Easter</td>
                <td className="border border-gray-200 px-4 py-2">Mon, 3 May 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-red-600">Public Holiday</td>
                <td className="border border-gray-200 px-4 py-2">School closed</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Eid al-Adha</td>
                <td className="border border-gray-200 px-4 py-2">Sun 16 & Mon 17 May 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-red-600">Public Holiday</td>
                <td className="border border-gray-200 px-4 py-2">School closed Mon 17 May</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Mother's Day</td>
                <td className="border border-gray-200 px-4 py-2">Sat, 9 May 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-purple-600">Event</td>
                <td className="border border-gray-200 px-4 py-2">Classroom activity</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Reading Day</td>
                <td className="border border-gray-200 px-4 py-2">Thu, 14 May 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-purple-600">Event</td>
                <td className="border border-gray-200 px-4 py-2">Promotes reading culture</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Project Week</td>
                <td className="border border-gray-200 px-4 py-2">22 – 25 May 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-green-600">Project</td>
                <td className="border border-gray-200 px-4 py-2">Interdisciplinary learning week</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Sports Day</td>
                <td className="border border-gray-200 px-4 py-2">Thu, 4 Jun 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-purple-600">Event</td>
                <td className="border border-gray-200 px-4 py-2">Physical activity day</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Summerfest</td>
                <td className="border border-gray-200 px-4 py-2">Thu, 11 Jun 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-purple-600">Event</td>
                <td className="border border-gray-200 px-4 py-2">End-of-year celebration</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Last Day of School</td>
                <td className="border border-gray-200 px-4 py-2">Mon, 21 Jun 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold">School</td>
                <td className="border border-gray-200 px-4 py-2">Grades 1–9</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Summer Holidays</td>
                <td className="border border-gray-200 px-4 py-2">22 Jun – 31 Aug 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-orange-500">School Holiday</td>
                <td className="border border-gray-200 px-4 py-2">Students</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Summer School</td>
                <td className="border border-gray-200 px-4 py-2">2 – 13 Aug 2027</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-green-600">Project</td>
                <td className="border border-gray-200 px-4 py-2">Optional. Ages 6–15.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">School Holidays, Summary</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 text-sm mb-4">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Holiday</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Dates</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Autumn Holidays</td>
                <td className="border border-gray-200 px-4 py-2">19 – 23 Oct 2026</td>
                <td className="border border-gray-200 px-4 py-2">Students free. Staff report to school as per Director's schedule.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Winter Holidays</td>
                <td className="border border-gray-200 px-4 py-2">21 Dec 2026 – 8 Jan 2027</td>
                <td className="border border-gray-200 px-4 py-2">Includes Catholic Christmas, Orthodox Christmas, and New Year's Day.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Spring Holidays</td>
                <td className="border border-gray-200 px-4 py-2">29 Mar – 2 Apr 2027</td>
                <td className="border border-gray-200 px-4 py-2">Students free. Staff report to school as per Director's schedule.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Summer Holidays</td>
                <td className="border border-gray-200 px-4 py-2">22 Jun – 31 Aug 2027</td>
                <td className="border border-gray-200 px-4 py-2">Longest break. Summer School runs 2–13 Aug (optional).</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 space-y-2">
          <p>IMPORTANT, Holidays for staff vs. students:</p>
          <p>Autumn Holidays (19–23 Oct) and Spring Holidays (29 Mar–2 Apr) are non-teaching days for students,</p>
          <p>but ALL staff (teachers, support, administration) continue to work according to the Director's schedule.</p>
          <p>Only the Winter Holidays and Summer Holidays are full closures for both students and staff.</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Public Holidays, School Closed</h3>
        <p className="mb-4">IDSS observes the following official public holidays, reflecting the multicultural character of our school and BiH law. On these days the school is closed for both students and staff.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Holiday</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Context</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Statehood Day (BiH)</td>
                <td className="border border-gray-200 px-4 py-2">Wed, 25 Nov 2026</td>
                <td className="border border-gray-200 px-4 py-2">Foundation of ZAVNOBiH, 1943</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Catholic Christmas</td>
                <td className="border border-gray-200 px-4 py-2">Fri, 25 Dec 2026</td>
                <td className="border border-gray-200 px-4 py-2">Christian holiday</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">New Year's Day</td>
                <td className="border border-gray-200 px-4 py-2">Fri, 1 Jan 2027</td>
                <td className="border border-gray-200 px-4 py-2">Civic and cultural holiday</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Orthodox Christmas</td>
                <td className="border border-gray-200 px-4 py-2">Thu, 7 Jan 2027</td>
                <td className="border border-gray-200 px-4 py-2">Julian calendar Christmas</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Independence Day (BiH)</td>
                <td className="border border-gray-200 px-4 py-2">Mon, 1 Mar 2027</td>
                <td className="border border-gray-200 px-4 py-2">1992 independence referendum</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Eid al-Fitr</td>
                <td className="border border-gray-200 px-4 py-2">Tue, 9 Mar 2027</td>
                <td className="border border-gray-200 px-4 py-2">End of Ramadan</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Labor Day</td>
                <td className="border border-gray-200 px-4 py-2">Mon, 3 May 2027</td>
                <td className="border border-gray-200 px-4 py-2">International Labour Day</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Orthodox Easter</td>
                <td className="border border-gray-200 px-4 py-2">Mon, 3 May 2027</td>
                <td className="border border-gray-200 px-4 py-2">Combined with Labour Day</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Eid al-Adha</td>
                <td className="border border-gray-200 px-4 py-2">Mon, 17 May 2027</td>
                <td className="border border-gray-200 px-4 py-2">Feast of Sacrifice</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">School Events</h3>
        <p className="mb-4">The following school events are scheduled throughout the year. They contribute to students' holistic, cultural, social, and emotional development. Details and preparation notes are communicated by email in advance of each event.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-yellow-500 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Event</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Parents Evening (Gr.1–9)</td>
                <td className="border border-gray-200 px-4 py-2">Fri 25 Sep / Mon 28 Sep 2026</td>
                <td className="border border-gray-200 px-4 py-2">1st formal meeting; alt. date if needed</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">German Unity Day</td>
                <td className="border border-gray-200 px-4 py-2">Sat, 3 Oct 2026</td>
                <td className="border border-gray-200 px-4 py-2">Non-teaching; European history context</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Halloween</td>
                <td className="border border-gray-200 px-4 py-2">Sat, 31 Oct 2026</td>
                <td className="border border-gray-200 px-4 py-2">Creative expression; Anglo-Saxon tradition</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Laternenfest</td>
                <td className="border border-gray-200 px-4 py-2">Wed, 11 Nov 2026</td>
                <td className="border border-gray-200 px-4 py-2">St Martin's lantern festival</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Thanksgiving Day</td>
                <td className="border border-gray-200 px-4 py-2">Thu, 26 Nov 2026</td>
                <td className="border border-gray-200 px-4 py-2">Intercultural; gratitude & community</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Winter Celebration</td>
                <td className="border border-gray-200 px-4 py-2">Fri, 11 Dec 2026</td>
                <td className="border border-gray-200 px-4 py-2">Inclusive; student performances</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Carnival</td>
                <td className="border border-gray-200 px-4 py-2">Mon, 8 Feb 2027</td>
                <td className="border border-gray-200 px-4 py-2">German school tradition; creativity</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Parents Evening (Gr.1–9)</td>
                <td className="border border-gray-200 px-4 py-2">Fri 19 Feb / Mon 22 Feb 2027</td>
                <td className="border border-gray-200 px-4 py-2">2nd formal meeting; alt. date if needed</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Women's Day</td>
                <td className="border border-gray-200 px-4 py-2">Mon, 8 Mar 2027</td>
                <td className="border border-gray-200 px-4 py-2">Gender equality awareness</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Open Day</td>
                <td className="border border-gray-200 px-4 py-2">Fri, 26 Mar 2027</td>
                <td className="border border-gray-200 px-4 py-2">Students as school ambassadors</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Mother's Day</td>
                <td className="border border-gray-200 px-4 py-2">Sat, 9 May 2027</td>
                <td className="border border-gray-200 px-4 py-2">Classroom gratitude activity</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Reading Day</td>
                <td className="border border-gray-200 px-4 py-2">Thu, 14 May 2027</td>
                <td className="border border-gray-200 px-4 py-2">Promotes reading culture</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Project Week</td>
                <td className="border border-gray-200 px-4 py-2">22–25 May 2027</td>
                <td className="border border-gray-200 px-4 py-2">Interdisciplinary; teamwork; presentations</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Sports Day</td>
                <td className="border border-gray-200 px-4 py-2">Thu, 4 Jun 2027</td>
                <td className="border border-gray-200 px-4 py-2">Physical activity; team spirit; fair play</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Summerfest</td>
                <td className="border border-gray-200 px-4 py-2">Thu, 11 Jun 2027</td>
                <td className="border border-gray-200 px-4 py-2">End-of-year celebration; student awards</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Special Note, IDSS Preschool Group</h3>
        <p className="mb-4">The IDSS Preschool Group operates within IDSS but follows the calendar of the International Montessori House (IMH). This means certain closures and open days differ from those of Grades 1–9. The table below lists all dates where the Preschool Group schedule differs from the main school calendar.</p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Note for Preschool Families</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Fri, 25 Sep 2026</td>
                <td className="border border-gray-200 px-4 py-2">Staff Training Day (IMH). PRESCHOOL CLOSED. Parents are required to arrange alternative care. Written notice given ≥14 days in advance.</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">19–23 Oct 2026</td>
                <td className="border border-gray-200 px-4 py-2">Autumn Holidays for Grades 1–9. PRESCHOOL REMAINS OPEN, follows IMH calendar.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Fri, 16 Apr 2027</td>
                <td className="border border-gray-200 px-4 py-2">Staff Training Day (IMH). PRESCHOOL CLOSED. Parents are required to arrange alternative care. Written notice given ≥14 days in advance.</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">29 Mar – 2 Apr 2027</td>
                <td className="border border-gray-200 px-4 py-2">Spring Holidays for Grades 1–9. PRESCHOOL follows IMH calendar, check IMH schedule for closures.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-4">
          <p className="text-lg">At the start of each school year, the Director publishes a written, synchronised operational calendar for the IDSS Preschool Group (Prilog II, available on idss.edu.ba).</p>
          <p className="text-lg">Preschool families are notified of any Staff Training closures at least 14 days in advance.</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Calendar Amendments</h3>
        <p>The Director of IDSS reserves the right to amend individual dates in response to exceptional circumstances, with prior written notice to parents and staff. All amendments are published promptly on idss.edu.ba. In case of school closure due to severe weather, IDSS follows the guidance of public schools in Sarajevo Canton (http://mon.ks.gov.ba/pocetna) and notifies families by email.</p>
      </div>
    )
  },
  {
    id: "school-hours",
    title: "SCHOOL HOURS",
    content: (
      <div className="space-y-6">
        <p>IDSS is open for students from 07:30 to 17:00, every working day. The school day is structured to maximise focused learning, balanced with regular breaks for nutrition, physical activity, and social connection. Each teaching period is 45 minutes, with 5-minute transitions between subjects.</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Time</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">07:30</td>
                <td className="border border-gray-200 px-4 py-2">School opens, drop-off begins for all grades</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">07:30 – 07:55</td>
                <td className="border border-gray-200 px-4 py-2">Arrival window, students settle, prepare for the day</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">07:55</td>
                <td className="border border-gray-200 px-4 py-2">LATEST ARRIVAL, students must be seated and ready</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">08:00</td>
                <td className="border border-gray-200 px-4 py-2">Lessons begin, Period 1</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">08:00 – 08:45</td>
                <td className="border border-gray-200 px-4 py-2">Period 1 (with 5-min transitions between subjects)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">08:45 – 09:05</td>
                <td className="border border-gray-200 px-4 py-2">Breakfast break</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">09:00</td>
                <td className="border border-gray-200 px-4 py-2">Main gate locked</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">09:05 – 11:30</td>
                <td className="border border-gray-200 px-4 py-2">Morning lessons (with 5-min transitions between subjects)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">11:30 – 12:15</td>
                <td className="border border-gray-200 px-4 py-2">Lunch</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">12:15 – 14:40</td>
                <td className="border border-gray-200 px-4 py-2">Afternoon lessons (with 5-min transitions between subjects)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">14:40</td>
                <td className="border border-gray-200 px-4 py-2">Regular pick-up, students not enrolled in Afterschool Programme</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">14:40 – 15:15</td>
                <td className="border border-gray-200 px-4 py-2">Snack + break (Afterschool Programme students)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">15:15 – 17:00</td>
                <td className="border border-gray-200 px-4 py-2">Afterschool Programme</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">16:30 – 17:00</td>
                <td className="border border-gray-200 px-4 py-2">Afterschool Programme pick-up window</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">17:00</td>
                <td className="border border-gray-200 px-4 py-2">School closes</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 space-y-4">
          <p>PUNCTUALITY RULE, based on the IDSS Rulebook on School House Rules (Art. 10):</p>
          <p>Students must arrive at school no later than 5 minutes before the start of classes.</p>
          <p>This means students must be SEATED AND READY at 07:55 for the 08:00 lesson.</p>
          <p className="mt-4">A student who arrives more than 5 minutes after the start of a lesson (i.e. after 08:05)</p>
          <p>will NOT be admitted to the ongoing lesson.</p>
          <p>They will wait in a supervised area and join at the beginning of the next period.</p>
          <p>All delays are recorded daily by the class teacher.</p>
        </div>
      </div>
    )
  },
  {
    id: "attendance",
    title: "ATTENDANCE",
    content: (
      <div className="space-y-6">
        <p>Regular school attendance is a legal obligation and a condition for academic success. Families are responsible for ensuring their child arrives on time and attends school every day. Attendance records are maintained by the class teacher and the school pedagogue.</p>
        
        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Reporting an Absence</h3>
        <p>If a student is absent, the following procedure must be followed:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Same day:</strong> Send an email to info@idss.ba AND the class teacher, stating the date and reason for the absence.</li>
          <li><strong>Absence of exactly 2 days:</strong> Inform the Head of Education AND the class teacher by email.</li>
          <li><strong>Planned absence (non-illness):</strong> Submit a written request at least 7 days in advance. Deliver to the school secretary directly or via the class teacher. The class teacher will respond within 2 working days.</li>
          <li><strong>Specialist medical appointment:</strong> Notify the class teacher in advance. A medical note or referral must be submitted no later than 2 days after the student returns to school.</li>
          <li><strong>Frequent illness absences:</strong> A medical certificate is required.</li>
        </ul>
        
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-4">
          <p>Parent self-justification limit:</p>
          <p>A parent/guardian may personally justify an absence without a medical note for a maximum of 2 days per semester (4 days per school year).</p>
          <p className="mt-4">All other absences require written documentation.</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Approved Absence, Who Can Authorise</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Duration</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Authorised by</th>
                <th className="border border-gray-200 px-4 py-2 text-left">How to request</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Single lesson (emergency)</td>
                <td className="border border-gray-200 px-4 py-2">Subject teacher</td>
                <td className="border border-gray-200 px-4 py-2">Verbal, teacher contacts parent</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Up to 3 working days</td>
                <td className="border border-gray-200 px-4 py-2">Class teacher</td>
                <td className="border border-gray-200 px-4 py-2">Written request, min. 7 days in advance</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Up to 5 working days</td>
                <td className="border border-gray-200 px-4 py-2">Principal</td>
                <td className="border border-gray-200 px-4 py-2">Written request, min. 7 days in advance</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Up to 15 working days</td>
                <td className="border border-gray-200 px-4 py-2">Teaching Council</td>
                <td className="border border-gray-200 px-4 py-2">Written request, min. 7 days in advance</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Unexcused Absences, Consequences</h3>
        <p className="mb-4">Unexcused absence is classified as a serious breach of student duty under IDSS regulations and BiH law. The following disciplinary measures apply automatically based on the cumulative number of unexcused hours per school year:</p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Unexcused Hours</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Disciplinary Measure</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Conduct Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">0 – 5</td>
                <td className="border border-gray-200 px-4 py-2">None</td>
                <td className="border border-gray-200 px-4 py-2">Exemplary (primjerno)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">6 – 10</td>
                <td className="border border-gray-200 px-4 py-2">Class teacher reprimand</td>
                <td className="border border-gray-200 px-4 py-2">Very good (vrlo dobro)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">11 – 19</td>
                <td className="border border-gray-200 px-4 py-2">Class council reprimand</td>
                <td className="border border-gray-200 px-4 py-2">Good (dobro)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">20 – 26</td>
                <td className="border border-gray-200 px-4 py-2">Director reprimand</td>
                <td className="border border-gray-200 px-4 py-2">Satisfactory (zadovoljava)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">26 – 30</td>
                <td className="border border-gray-200 px-4 py-2">Teaching council reprimand</td>
                <td className="border border-gray-200 px-4 py-2">Poor (loše)</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold text-red-600">31+</td>
                <td className="border border-gray-200 px-4 py-2 font-bold text-red-600">EXPULSION from school</td>
                <td className="border border-gray-200 px-4 py-2 text-red-600">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 space-y-4">
          <p>An absence is UNEXCUSED when:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>No medical note or written justification has been submitted to the class teacher.</li>
            <li>The parent did not request and receive prior written approval.</li>
            <li>The parent's self-justification limit (2 days/semester) has already been used.</li>
          </ul>
          <p className="mt-4">At the end of each semester, the class teacher and school pedagogue prepare an individual absence report for every student. The attendance register is maintained by the school pedagogue.</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Tardiness</h3>
        <p>Students are expected to be seated and ready to work by 07:55. Classes begin at 08:00. A student who arrives more than 5 minutes after the start of a lesson will not be admitted to the ongoing lesson and will wait in a supervised area until the next period begins. All delays are recorded daily.</p>
        <p>Repeated tardiness without justification is treated as a conduct issue and will result in a meeting with parents. Patterns of tardiness may be recorded as partial unexcused absences at the discretion of the class teacher.</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">School Closure Due to Bad Weather</h3>
        <p>In the event of severe weather, IDSS follows the guidance of public schools in Sarajevo Canton. If public schools are closed, IDSS is closed as well. Families will be notified by email. For updates, check: http://mon.ks.gov.ba/pocetna</p>
      </div>
    )
  }
];
