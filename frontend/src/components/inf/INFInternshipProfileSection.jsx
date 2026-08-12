import SectionCard from "../SectionCard";
import InputField from "../InputField";
import CourseProfileCard from "../CourseProfileCard";

import infCourses from "../../constants/infCourses";

const EMPTY_PROFILE = {
  designation: "",
  ctc: "",
  stipend: "",
  internshipDuration: "",
  location: "",
};

export default function INFInternshipProfileSection({
  formData,
  setFormData,
  setValidationMessage,
}) {
  const handleProfileChange = (course, field, value) => {
    setValidationMessage("");

    if (field === "ctc" || field === "stipend") {
      if (value !== "" && !/^\d*\.?\d{0,2}$/.test(value)) {
        return;
      }
    }

    setFormData((prev) => ({
      ...prev,
      internshipProfiles: {
        ...prev.internshipProfiles,
        [course]: {
          ...EMPTY_PROFILE,
          ...(prev.internshipProfiles?.[course] || {}),
          [field]: value,
        },
      },
    }));
  };

  return (
    <SectionCard title="Job Profile">
      <div className="space-y-6">
        {infCourses.map((course) => {
          // Fallback: agar formData.internshipProfiles me is course ka key
          // (e.g. sinf / jinf) abhi tak initialize nahi hua, to empty profile use karo
          const profile =
            formData.internshipProfiles?.[course.key] || EMPTY_PROFILE;

          return (
            <CourseProfileCard key={course.key} title={course.title}>
              <InputField
                label="Job Designation"
                value={profile.designation}
                onChange={(e) => handleProfileChange(course.key, "designation", e.target.value)}
              />

              <InputField
                label="CTC (if applicable)"
                value={profile.ctc}
                onChange={(e) => handleProfileChange(course.key, "ctc", e.target.value)}
                placeholder="e.g. 12.5"
                suffix="LPA"
                error={profile.ctc && !/^\d+(\.\d{1,2})?$/.test(profile.ctc) ? "Invalid format" : ""}
              />

              <InputField
                label="Stipend (Monthly)"
                value={profile.stipend}
                onChange={(e) => handleProfileChange(course.key, "stipend", e.target.value)}
                placeholder="e.g. 25000"
                suffix="Per Month"
                error={profile.stipend && !/^\d+(\.\d{1,2})?$/.test(profile.stipend) ? "Invalid format" : ""}
              />

              <InputField
                label="Internship Duration"
                value={profile.internshipDuration}
                onChange={(e) => handleProfileChange(course.key, "internshipDuration", e.target.value)}
                placeholder="e.g. 6"
                suffix="Months"
              />

              <InputField
                label="Location"
                value={profile.location}
                onChange={(e) => handleProfileChange(course.key, "location", e.target.value)}
              />
            </CourseProfileCard>
          );
        })}
      </div>
      <ul className="mt-6 space-y-1.5 text-sm font-bold text-gray-700 leading-relaxed list-disc list-inside">
        <li>Performance-based bonuses should not be declared in take-home salary/CTC but as Perks.</li>
        <li>Any amount to be disbursed after the end of the first 12 months should not be a part of CTC.</li>
      </ul>
    </SectionCard>
  );
}