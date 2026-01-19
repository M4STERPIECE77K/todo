-- v1_table.sql
-- Initial table creation for TaskMaster application

-- Create Users table (for future authentication support)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create Tasks table
CREATE TABLE IF NOT EXISTS tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    priority TEXT CHECK (priority IN ('Low', 'Medium', 'High')) DEFAULT 'Medium',
    category TEXT DEFAULT 'Personal',
    is_routine BOOLEAN DEFAULT FALSE,
    due_date TIMESTAMPTZ,
    status TEXT CHECK (status IN ('active', 'completed', 'trashed')) DEFAULT 'active',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
