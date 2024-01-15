export const calculateTotalExperience = (experiences) => {
  let totalExperience = 0.0;
  experiences.forEach((experience) => {
    if (experience.startDate && experience.endDate) {
      const startDate = new Date(experience.startDate);
      const endDate = new Date(experience.endDate);
      const duration = endDate - startDate;
      const years = duration / (365 * 24 * 60 * 60 * 1000);
      totalExperience += years;
    }
  });
  return parseFloat(totalExperience.toFixed(1));
};
