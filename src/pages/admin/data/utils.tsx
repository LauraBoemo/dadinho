export interface StudentProgress {
  id: number;
  user: {
    id: number;
    name: string;
    email: string;
    role: 'STUDENT' | 'TEACHER' | string;
  };
  level: {
    id: number;
    icon: string;
    title: string;              // ex: "Nível 01"
    recipe: Array<{
      id: number;
      item: {
        id: number;
        icon: string;
        name: string;
      };
      quantity: number;
    }>;
    baskets: Array<{
      id: number;
      name: string;
      items: Array<{
        id: number;
        icon: string;
        name: string;
      }>;
    }>;
  };
  attempts: number;
  totalTime: number;            // em segundos
  concluded: boolean;
}

// 1. Total de registros (cada registro agora representa um progresso de nível)
export const getTotalStudents = (students: StudentProgress[]) => {
  return students?.length ?? 0;
}

// 2. Quantos já passaram de (isto é, concluíram) o Nível 1
export const getCountStudentsPassedLevel1 = (students: StudentProgress[]): number => {
  if (!students) return 0;

  const passedUserIds = new Set<number>();

  students.forEach(s => {
    if (s.concluded && s.level.id > 1) {
      passedUserIds.add(s.user.id);
    }
  });

  return passedUserIds.size;
};

// 3. Maior nível alcançado (entre todos os registros, considerando apenas os concluídos)
export const getMaxLevelReached = (students: StudentProgress[]) => {
  if (!students) return 0;
  return students
    .filter(s => s.concluded)
    .reduce((max, s) => Math.max(max, s.level.id), 0);
};

// 4. Nível com maior tempo médio (média de totalTime) — retorna { level, averageTimeEmMinutos }
export const getHighestAverageTime = (students: StudentProgress[]) => {
  if (!students) return { level: 0, averageTime: '0.00' };

  // Agrupa totalTime por level.id
  const levelTimes: Record<number, number[]> = {};
  students
    .filter(s => s.concluded)
    .forEach(s => {
      levelTimes[s.level.id] = levelTimes[s.level.id] || [];
      levelTimes[s.level.id].push(s.totalTime);
    });

  let highestAvg = 0;
  let highestLevel = 0;
  for (const [lvl, times] of Object.entries(levelTimes)) {
    const avgSec = times.reduce((a, b) => a + b, 0) / times.length;
    const avgMin = avgSec / 60;
    if (avgMin > highestAvg) {
      highestAvg = avgMin;
      highestLevel = Number(lvl);
    }
  }

  return {
    level: highestLevel,
    averageTime: highestAvg.toFixed(2)
  };
};

// 5. Nível com menor tempo médio
export const getLowestAverageTime = (students: StudentProgress[]) => {
  if (!students) return { level: 0, averageTime: '0.00' };

  const levelTimes: Record<number, number[]> = {};
  students
    .filter(s => s.concluded)
    .forEach(s => {
      levelTimes[s.level.id] = levelTimes[s.level.id] || [];
      levelTimes[s.level.id].push(s.totalTime);
    });

  let lowestAvg = Infinity;
  let lowestLevel = 0;
  for (const [lvl, times] of Object.entries(levelTimes)) {
    const avgSec = times.reduce((a, b) => a + b, 0) / times.length;
    const avgMin = avgSec / 60;
    if (avgMin < lowestAvg) {
      lowestAvg = avgMin;
      lowestLevel = Number(lvl);
    }
  }

  return {
    level: lowestLevel,
    averageTime: isFinite(lowestAvg) ? lowestAvg.toFixed(2) : '0.00'
  };
};

// 6. Quantidade de alunos (registros) por nível concluído — formata para gráfico/tabela
export const formatStudentData = (students: StudentProgress[]) => {
  if (!students) return [];

  // Conta quantos registros concluíram cada nível
  const counts: Record<string, number> = {};
  students
    .filter(s => s.concluded)
    .forEach(s => {
      const key = s.level.title; // ex: "Nível 01"
      counts[key] = (counts[key] || 0) + 1;
    });

  // Converte em array de { Nível, Alunos }
  return Object.entries(counts).map(([levelTitle, qtde]) => ({
    Nível: levelTitle,
    Alunos: qtde
  }));
};
// 7. Dados detalhados por registro para exibição em tabela
// 7. Dados detalhados por aluno, combinando o array antigo e o novo array de progresso
export const formatContentData = (
  students: any[],
  progressList: StudentProgress[]
) => {
  if (!students || students.length === 0) return [];

  return students.map(st => {
    // filtra apenas registros de progresso concluídos deste aluno
    const recs = progressList?.filter(
      pr => pr.user.id === st.user.id && pr.concluded
    );

    // maior nível alcançado
    const highestLevelNum = recs?.reduce(
      (max, r) => Math.max(max, r.level.id),
      0
    );

    // tempo médio em minutos
    const avgMin =
      recs?.length > 0
        ? (recs.reduce((sum, r) => sum + r.totalTime, 0) / recs.length / 60)
            .toFixed(2)
        : '0.00';

    return {
      name: st.user.name,
      class: st.className,
      teacher: st.classTeacher.name,
      serie: st.classGrade,
      highestLevel: highestLevelNum?.toString(),
      averageTime: avgMin
    };
  });
};