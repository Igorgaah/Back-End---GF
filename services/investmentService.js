const supabase = require('../supabaseClient');

// LISTA todos investimentos
async function list() {
  const { data, error } = await supabase.from('investments').select('*').order('created_at', { ascending: false });
  if (error) throw new Error(error.message);
  return data;
}

// BUSCA investimento por ID
async function getById(id) {
  const result = await db.query('SELECT * FROM investments WHERE id = $1', [id]);
  return result.rows[0] || null;
}

module.exports = { list, create, update, remove, typeDistribution, getById };


// CRIA novo investimento
async function create(obj) {
  const { name, type, amount, investment_date } = obj;
  const { data, error } = await supabase
    .from('investments')
    .insert([{ name, type, amount, investment_date }])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

// ATUALIZA investimento
async function update(id, obj) {
  const { name, type, amount, investment_date } = obj;
  const { data, error } = await supabase
    .from('investments')
    .update({ name, type, amount, investment_date })
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  if (!data) return null;
  return data;
}

// REMOVE investimento
async function remove(id) {
  const { data, error } = await supabase
    .from('investments')
    .delete()
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  if (!data) return null;
  return data;
}

// Para o gráfico: distribuição por tipo
async function typeDistribution() {
  const { data, error } = await supabase.from('investments').select('type');
  if (error) throw new Error(error.message);

  const result = {};
  data.forEach(item => {
    result[item.type] = result[item.type] ? result[item.type] + 1 : 1;
  });
  // Retorna array { type, count }
  return Object.entries(result).map(([type, count]) => ({ type, count }));
}

module.exports = { list, create, update, remove, typeDistribution };