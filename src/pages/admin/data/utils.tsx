export const getTotalStudents = (students: any[]) => {
    return students?.length;
}

export const getCountStudentsPassedLevel1 = (students: any[]) => {
    return students?.filter((student) => 
        student?.concludedLevels?.some((level: { level: { id: number; }; }) => level.level.id > 1)
    )?.length;
};

export const getMaxLevelReached = (students: any[]) => {
    let maxLevel = 0;
    students?.forEach((student) => {
        student?.concludedLevels?.forEach((level: { level: { title: string; }; }) => {
            const levelNumber = parseInt(level.level.title, 10);
            if (levelNumber > maxLevel) {
                maxLevel = levelNumber;
            }
        });
    });
    return maxLevel;
};

export const getHighestAverageTime = (students: any[]) => {
    const levelTimes = {};

    students?.forEach((student: { concludedLevels: any[]; }) => {
        student?.concludedLevels?.forEach((level: { level: { title: string; }; totalTime: any; }) => {
            const levelNumber = parseInt(level.level.title, 10);
            // @ts-ignore
            if (!levelTimes[levelNumber]) {
                // @ts-ignore
                levelTimes[levelNumber] = [];
            }
            // @ts-ignore
            levelTimes[levelNumber].push(level.totalTime);
        });
    });

    let highestAvg = 0;
    let highestLevel = null;

    Object.keys(levelTimes)?.forEach((level) => {
        // @ts-ignore
        const times = levelTimes[level];
        const avgTime = times.reduce((a: any, b: any) => a + b, 0) / times?.length;
        const avgTimeInMinutes = avgTime / 60;
        if (avgTimeInMinutes > highestAvg) {
            highestAvg = avgTimeInMinutes;
            highestLevel = level;
        }
    });

    return { level: highestLevel, averageTime: highestAvg.toFixed(2) };
};

export const getLowestAverageTime = (students: any[]) => {
    const levelTimes = {};

    students?.forEach((student: { concludedLevels: any[]; }) => {
        student?.concludedLevels?.forEach((level: { level: { title: string; }; totalTime: any; }) => {
            const levelNumber = parseInt(level.level.title, 10);
            // @ts-ignore
            if (!levelTimes[levelNumber]) {
                // @ts-ignore
                levelTimes[levelNumber] = [];
            }
            // @ts-ignore
            levelTimes[levelNumber].push(level.totalTime);
        });
    });

    let lowestAvg = Infinity;
    let lowestLevel = null;

    Object.keys(levelTimes)?.forEach((level) => {
        // @ts-ignore
        const times = levelTimes[level];
        const avgTime = times.reduce((a: any, b: any) => a + b, 0) / times?.length;
        const avgTimeInMinutes = avgTime / 60;
        if (avgTimeInMinutes < lowestAvg) {
            lowestAvg = avgTimeInMinutes;
            lowestLevel = level;
        }
    });

    return { level: lowestLevel, averageTime: lowestAvg.toFixed(2) };
};

export const formatStudentData = (students: any[]) => {
    const levelCounts = {};

    students?.forEach((student) => {
        const levelsCompleted = new Set();

        student?.concludedLevels?.forEach((level: { level: { title: string; }; }) => {
            const levelNumber = parseInt(level.level.title, 10);
            levelsCompleted.add(levelNumber);
        });

        levelsCompleted.forEach((levelNumber) => {
            const levelTitle = `Nível ${levelNumber}`;
            // @ts-ignore
            if (!levelCounts[levelTitle]) {
                // @ts-ignore
                levelCounts[levelTitle] = 0;
            }
            // @ts-ignore
            levelCounts[levelTitle]++;
        });
    });

    const formattedData = Object.keys(levelCounts).map((level) => ({
        "Nível": level,
        // @ts-ignore
        "Alunos": levelCounts[level]
    }));

    return formattedData;
};

export const formatContentData = (students: any[]) => {
    return students?.map((student) => {
        let highestLevel = 0;
        let totalTime = 0;
        student?.concludedLevels?.forEach((level: { level: { title: string; }; totalTime: number; }) => {
            const levelNumber = parseInt(level.level.title, 10);
            if (levelNumber > highestLevel) {
                highestLevel = levelNumber;
            }
            totalTime += level.totalTime;
        });
        const averageTime = student.concludedLevels?.length > 0 ? (totalTime / student.concludedLevels?.length / 60).toFixed(2) : 0;

        return {
            name: student.user.name,
            teacher: student.classTeacher.name,
            class: student.className,
            serie: student.classGrade,
            highestLevel: highestLevel.toString(),
            averageTime: averageTime.toString()
        };
    });
};
